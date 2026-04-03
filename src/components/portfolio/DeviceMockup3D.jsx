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

      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(0, 0.3, 4.5);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      el.appendChild(renderer.domElement);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
      keyLight.position.set(2, 5, 4);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x8899ff, 0.4);
      fillLight.position.set(-4, 2, 2);
      scene.add(fillLight);

      const accentLight = new THREE.PointLight(accentColor, 3, 10);
      accentLight.position.set(0, -1, 3);
      scene.add(accentLight);

      // Materials
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

      // ---- BASE (bottom half) ----
      // Sits flat, top face is the keyboard
      const baseGeo = new THREE.BoxGeometry(3.0, 0.12, 2.0);
      const baseMesh = new THREE.Mesh(baseGeo, bodyMat);
      baseMesh.position.set(0, 0, 0);
      laptopGroup.add(baseMesh);

      // Keyboard deck (dark inset on top of base)
      const deckGeo = new THREE.BoxGeometry(2.8, 0.01, 1.8);
      const deckMesh = new THREE.Mesh(deckGeo, darkMat);
      deckMesh.position.set(0, 0.065, 0);
      laptopGroup.add(deckMesh);

      // Trackpad
      const tpadGeo = new THREE.BoxGeometry(0.8, 0.005, 0.55);
      const tpadMesh = new THREE.Mesh(tpadGeo, new THREE.MeshPhysicalMaterial({
        color: 0x222224, metalness: 0.5, roughness: 0.3
      }));
      tpadMesh.position.set(0, 0.068, 0.55);
      laptopGroup.add(tpadMesh);

      // ---- LID (screen half) ----
      // Hinge is at the BACK edge of base (z = -1.0)
      // Lid rotates around X axis at hinge point
      // Positive open angle tilts lid backward (screen faces forward-up)
      const lidGroup = new THREE.Group();
      // Place pivot at back edge, at top of base
      lidGroup.position.set(0, 0.06, -1.0);
      laptopGroup.add(lidGroup);

      // Open angle: ~110 degrees from flat (0 = closed flat, PI = fully open flat)
      // We want screen facing slightly toward camera = ~-1.9 rad from closed
      lidGroup.rotation.x = -1.85;

      // Lid body — extends upward from pivot (local +Y)
      const lidGeo = new THREE.BoxGeometry(3.0, 1.9, 0.1);
      const lidMesh = new THREE.Mesh(lidGeo, bodyMat);
      // Center of lid is 0.95 above pivot
      lidMesh.position.set(0, 0.95, 0);
      lidGroup.add(lidMesh);

      // Bezel (inner dark border) — on FRONT face of lid (local +Z = toward viewer when open)
      const bezelGeo = new THREE.BoxGeometry(2.88, 1.78, 0.01);
      const bezelMesh = new THREE.Mesh(bezelGeo, darkMat);
      bezelMesh.position.set(0, 0.95, 0.055);
      lidGroup.add(bezelMesh);

      // Screen — sits inside bezel on front face
      const screenTexture = new THREE.TextureLoader().load(screenshotUrl, () => {
        renderer && renderer.render(scene, camera);
      });
      screenTexture.minFilter = THREE.LinearFilter;
      screenTexture.magFilter = THREE.LinearFilter;

      const screenGeo = new THREE.PlaneGeometry(2.7, 1.65);
      const screenMesh = new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ map: screenTexture }));
      screenMesh.position.set(0, 0.95, 0.062);
      lidGroup.add(screenMesh);

      // ---- Mouse tracking ----
      let targetRotY = -0.2, targetRotX = 0.05;
      let currentRotY = -0.2, currentRotX = 0.05;

      const onMouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotY = -0.2 + x * 0.35;
        targetRotX = 0.05 - y * 0.15;
      };
      const onMouseLeave = () => { targetRotY = -0.2; targetRotX = 0.05; };
      el.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);

      // ---- Resize ----
      const handleResize = () => {
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        if (!nw || !nh) return;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener('resize', handleResize);

      // ---- Animation ----
      let t = 0;
      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        t += 0.008;
        currentRotY += (targetRotY - currentRotY) * 0.06;
        currentRotX += (targetRotX - currentRotX) * 0.06;
        laptopGroup.rotation.y = currentRotY + Math.sin(t * 0.35) * 0.018;
        laptopGroup.rotation.x = currentRotX + Math.sin(t * 0.28) * 0.006;
        laptopGroup.position.y = Math.sin(t * 0.5) * 0.06;
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