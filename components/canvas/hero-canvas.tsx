import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const COUNT = 100;
const SPEED = 0.003;
const CONNECT_DIST = 2.2;
const MAX_LINES = 800;

export const HeroCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 6;

    // Particles
    const positions = new Float32Array(COUNT * 3);
    const vx = new Float32Array(COUNT);
    const vy = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = 0;
      const angle = Math.random() * Math.PI * 2;
      vx[i] = Math.cos(angle) * SPEED;
      vy[i] = Math.sin(angle) * SPEED;
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const ptMat = new THREE.PointsMaterial({ color: 0x888888, size: 0.06, transparent: true, opacity: 0.55 });
    scene.add(new THREE.Points(ptGeo, ptMat));

    // Pre-allocated line geometry
    const linePos = new Float32Array(MAX_LINES * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x999999, transparent: true, opacity: 0.18 });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Move particles
      for (let i = 0; i < COUNT; i++) {
        positions[i * 3] += vx[i];
        positions[i * 3 + 1] += vy[i];
        if (positions[i * 3] > 6 || positions[i * 3] < -6) vx[i] *= -1;
        if (positions[i * 3 + 1] > 4.5 || positions[i * 3 + 1] < -4.5) vy[i] *= -1;
      }
      ptGeo.attributes.position.needsUpdate = true;

      // Update lines
      let lineCount = 0;
      for (let i = 0; i < COUNT && lineCount < MAX_LINES; i++) {
        for (let j = i + 1; j < COUNT && lineCount < MAX_LINES; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          if (dx * dx + dy * dy < CONNECT_DIST * CONNECT_DIST) {
            const base = lineCount * 6;
            linePos[base] = positions[i * 3];
            linePos[base + 1] = positions[i * 3 + 1];
            linePos[base + 2] = 0;
            linePos[base + 3] = positions[j * 3];
            linePos[base + 4] = positions[j * 3 + 1];
            linePos[base + 5] = 0;
            lineCount++;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, lineCount * 2);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
};
