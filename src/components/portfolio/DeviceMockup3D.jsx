import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DeviceMockup3D({ screenshotUrl, accentColor = '#3a8c5c' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let renderer, animFrameId, cleanup;
    let initialized = false;

    const init = (w, h) => {
      const scene = new THREE.Scene();

      // Camera: slightly above and in front
      const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
      camera.position.set(0, 1.2, 5.5);
      camera.lookAt(0, 0.4, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      el.appendChild(renderer.domElement);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
      keyLight.position.set(3, 6, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x8899ff, 0.4);
      fillLight.position.set(-4, 2, 2);
      scene.add(fillLight);

      const accentLight = new THREE.PointLight(accentColor, 3, 12);
      accentLight.position.set(0, 2, 3);
      scene.add(accentLight);

      const bodyMat = new THREE.MeshPhysicalMaterial({
        color: 0x1a1a1c,
        metalness: 0.9,
        roughness: 0.2,
      });
      const darkMat = new THREE.MeshPhysicalMaterial({
        color: 0x0a0a0a,
        metalness: 0.2,
        roughness: 0.8,
      });

      const laptopGroup = new THREE.Group();
      scene.add(laptopGroup);

      // --- BASE ---
      // Flat on XZ plane. Y=0 is bottom, Y=0.1 is top surface.
      const base = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.14, 2.1), bodyMat);
      base.position.set(0, 0.07, 0);
      laptopGroup.add(base);

      // Keyboard deck inset
      const deck = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.01, 1.9), darkMat);
      deck.position.set(0, 0.145, 0);
      laptopGroup.add(deck);

      // Trackpad
      const tpad = new THREE.Mesh(
        new THREE.BoxGeometry(0.85, 0.008, 0.58),
        new THREE.MeshPhysicalMaterial({ color: 0x222224, metalness: 0.5, roughness: 0.3 })
      );
      tpad.position.set(0, 0.148, 0.6);
      laptopGroup.add(tpad);

      // --- LID ---
      // The lidGroup pivot is at the HINGE: back edge of base, at the top surface level.
      // Position: x=0, y=0.14 (top of base), z=-1.05 (back edge)
      // The lid geometry extends in the +Y direction (upward) from this pivot.
      // rotation.x = 0   → lid is lying flat CLOSED on top of base (pointing backward/down)
      // rotation.x = -PI/2 → lid is perfectly vertical (90° open)
      // rotation.x = -PI*0.6 → lid is ~108° open (reclined back slightly, screen faces camera)

      const lidGroup = new THREE.Group();
      lidGroup.position.set(0, 0.14, -1.05);
      laptopGroup.add(lidGroup);

      // Slight tilt back (~20°) from vertical — screen clearly faces camera
      lidGroup.rotation.x = -Math.PI * 0.11;

      // Lid body: height=2.0 so center is at y=1.0 from pivot
      const lid = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.0, 0.1), bodyMat);
      lid.position.set(0, 1.0, 0);
      lidGroup.add(lid);

      // Bezel: on the FRONT face of the lid (+Z face, faces camera when open)
      const bezel = new THREE.Mesh(new THREE.BoxGeometry(3.08, 1.88, 0.012), darkMat);
      bezel.position.set(0, 1.0, 0.056);
      lidGroup.add(bezel);

      // Screen texture
      const screenTexture = new THREE.TextureLoader().load(screenshotUrl, () => {
        renderer && renderer.render(scene, camera);
      });
      screenTexture.minFilter = THREE.LinearFilter;
      screenTexture.magFilter = THREE.LinearFilter;

      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(2.9, 1.72),
        new THREE.MeshBasicMaterial({ map: screenTexture })
      );
      screen.position.set(0, 1.0, 0.063);
      lidGroup.add(screen);

      // --- Mouse tracking ---
      let targetRotY = -0.15, targetRotX = 0.0;
      let currentRotY = -0.15, currentRotX = 0.0;

      const onMouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotY = -0.15 + x * 0.3;
        targetRotX = 0.0 - y * 0.12;
      };
      const onMouseLeave = () => { targetRotY = -0.15; targetRotX = 0.0; };
      el.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);

      // --- Resize ---
      const handleResize = () => {
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        if (!nw || !nh) return;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener('resize', handleResize);

      // --- Animation loop ---
      let t = 0;
      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        t += 0.008;
        currentRotY += (targetRotY - currentRotY) * 0.06;
        currentRotX += (targetRotX - currentRotX) * 0.06;
        laptopGroup.rotation.y = currentRotY + Math.sin(t * 0.35) * 0.018;
        laptopGroup.rotation.x = currentRotX + Math.sin(t * 0.28) * 0.005;
        laptopGroup.position.y = Math.sin(t * 0.5) * 0.05 - 0.2;
        accentLight.intensity = 2.5 + Math.sin(t * 1.1) * 0.5;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animFrameId);
        el.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      };
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0 && !initialized) {
          initialized = true;
          observer.disconnect();
          cleanup = init(width, height);
        }
      }
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (cleanup) cleanup();
    };
  }, [screenshotUrl, accentColor]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none' }}
    />
  );
}