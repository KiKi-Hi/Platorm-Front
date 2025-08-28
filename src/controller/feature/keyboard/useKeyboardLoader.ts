import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const useKeyboardLoader = (container: HTMLDivElement) => {
  const scene = new THREE.Scene();

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0.5, 2);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(2, 2, 2);
  scene.add(directionalLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enableZoom = true;
  controls.target.set(0, 0, 0);
  controls.update();

  const textureLoader = new THREE.TextureLoader();
  const keycapTexture = textureLoader.load(
    '/assets/img/model/keycap/orange.png',
    (tex) => (tex.flipY = false),
  );
  const housingTexture = textureLoader.load(
    '/assets/img/model/housing/housingGray.png',
    (tex) => (tex.flipY = false),
  );

  const loader = new GLTFLoader();
  let model: THREE.Object3D | undefined;

  loader.load(
    '/assets/img/glb/keyboard.glb',
    (gltf) => {
      model = gltf.scene;

      model.traverse((child: any) => {
        if (child.isMesh) {
          child.material.map = keycapTexture; // TODO 키캡 안뜸
          if (child.name.includes('하우징')) {
            child.material.map = housingTexture;
          }
          child.material.needsUpdate = true;
        }
      });
      model.scale.set(0.5, 0.5, 0.5);
      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center);

      controls.target.set(0, 0, 0);
      controls.update();

      scene.add(model);
    },
    undefined,
    (err) => console.error('GLB 로드 실패:', err),
  );

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  const toggleKeycaps = () => {
    if (!model) return;
    model.traverse((child: any) => {
      if (child.name?.includes('키캡')) {
        child.visible = !child.visible;
      }
    });
  };

  return { toggleKeycaps, sceneReady: true };
};


export { useKeyboardLoader };