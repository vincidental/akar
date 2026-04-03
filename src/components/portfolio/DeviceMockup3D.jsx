import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DeviceMockup3D({ screenshotUrl, accentColor = '#3a8c5c' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let renderer, animFrameId;

    const init = (w, h) => {
      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
      camera.position.set(0, 0, 3.2);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      el.appendChild(renderer.domElement);

      // Lighting
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
      keyLight.position.set(3, 4, 3);
      scene.add(keyLight);

      const accentLight = new THREE.PointLight(accentColor, 2, 8);
      accentLight.position.set(-2, -1, 2);
      scene.add(accentLight);

      const rimLight = new THREE.DirectionalLight(0x88aaff, 0.5);
      rimLight.position.set(-3, 2, -1);
      scene.add(rimLight);

      // Laptop group
      const laptopGroup = new THREE.Group();
      scene.add(laptopGroup);

      const baseMat = new THREE.MeshPhysicalMaterial({
        color: 0x1c1c1e,
        metalness: 0.95,
        roughness: 0.15,
      });

      // Base
      const base = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.08, 1.7), baseMat);
      base.position.y = -0.6;
      laptopGroup.add(base);

      // Keyboard surface
      laptopGroup.add(
        Object.assign(
          new THREE.Mesh(
            new THREE.PlaneGeometry(2.4, 1.5),
            new THREE.MeshPhysicalMaterial({ color: 0x141414, metalness: 0.3, roughness: 0.9 })
          ),
          { rotation: new THREE.Euler(-Math.PI / 2, 0, 0), position: new THREE.Vector3(0, -0.555, 0) }
        )
      );

      // Trackpad
      const trackpad = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.005, 0.45),
        new THREE.MeshPhysicalMaterial({ color: 0x2a2a2c, metalness: 0.5, roughness: 0.3 })
      );
      trackpad.position.set(0, -0.554, 0.45);
      laptopGroup.add(trackpad);

      // Hinge / lid group
      const hingeGroup = new THREE.Group();
      hingeGroup.position.set(0, -0.555, -0.85);
      laptopGroup.add(hingeGroup);

      // Lid body
      const lid = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.68, 0.07), baseMat);
      lid.position.set(0, 0.84, 0);
      hingeGroup.add(lid);

      // Bezel
      const bezel = new THREE.Mesh(
        new THREE.BoxGeometry(2.48, 1.56, 0.01),
        new THREE.MeshPhysicalMaterial({ color: 0x050505, metalness: 0.1, roughness: 0.9 })
      );
      bezel.position.set(0, 0.84, 0.04);
      hingeGroup.add(bezel);

      // Screen texture
      const screenTexture = new THREE.TextureLoader().load(screenshotUrl, () => {
        renderer && renderer.render(scene, camera);
      });
      screenTexture.minFilter = THREE.LinearFilter;
      screenTexture.magFilter = THREE.LinearFilter;

      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(2.3, 1.44),
        new THREE.MeshBasicMaterial({ map: screenTexture })
      );
      screen.position.set(0, 0.84, 0.045);
      hingeGroup.add(screen);

      // Lid open angle
      hingeGroup.rotation.x = -Math.PI * 0.55;

      // Initial tilt
      laptopGroup.rotation.x = 0.08;
      laptopGroup.rotation.y = 0.15;
      laptopGroup.position.y = 0.05;

      // Mouse tracking
      let targetRotY = 0.15, targetRotX = 0.08;
      let currentRotY = 0.15, currentRotX = 0.08;

      const onMouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotY = 0.15 + x * 0.4;
        targetRotX = 0.08 - y * 0.2;
      };
      const onMouseLeave = () => { targetRotY = 0.15; targetRotX = 0.08; };

      el.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);

      // Animate
      let t = 0;
      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        t += 0.008;
        currentRotY += (targetRotY - currentRotY) * 0.06;
        currentRotX += (targetRotX - currentRotX) * 0.06;
        laptopGroup.rotation.y = currentRotY + Math.sin(t * 0.4) * 0.02;
        laptopGroup.rotation.x = currentRotX + Math.sin(t * 0.3) * 0.008;
        laptopGroup.position.y = 0.05 + Math.sin(t * 0.5) * 0.04;
        accentLight.intensity = 1.8 + Math.sin(t * 1.2) * 0.4;
        renderer.render(scene, camera);
      };
      animate();

      // Resize
      const handleResize = () => {
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        if (nw === 0 || nh === 0) return;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animFrameId);
        el.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      };
    };

    // Use ResizeObserver to wait until the container has real dimensions
    let cleanup;
    let initialized = false;

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