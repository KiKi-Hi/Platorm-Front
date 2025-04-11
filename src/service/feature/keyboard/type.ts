import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const useKeyboardLoader = (canvas: HTMLDivElement | null) => {
    const modelRef = useRef<THREE.Object3D>();
    const [sceneReady, setSceneReady] = useState(false);

    useEffect(() => {
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.set(0, 0.5, 2);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        canvas.appendChild(renderer.domElement);

        // Light
        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(2, 2, 2);
        scene.add(directionalLight);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.enableZoom = true;
        controls.target.set(0.5, 0.5, 0.5);
        controls.update();

        // Load Textures (WebP)
        const textureLoader = new THREE.TextureLoader();
        const keycapTexture = textureLoader.load('/model/orange.webp', tex => (tex.flipY = false));
        const housingTexture = textureLoader.load('/model/housingPink.webp', tex => (tex.flipY = false));

        // Load Model
        const loader = new GLTFLoader();
        loader.load(
            '/glb/keyboard.glb',
            gltf => {
                const model = gltf.scene;
                modelRef.current = model;

                model.traverse((child: any) => {
                    if (child.isMesh) {
                        child.material.map = keycapTexture;
                        if (child.name.includes('키보드_하우징_모델링_변경-맵핑001')) {
                            child.material.map = housingTexture;
                        }
                        child.material.needsUpdate = true;
                    }
                });

                scene.add(model);
                setSceneReady(true);
            },
            undefined,
            error => {
                console.error('모델 로드 에러:', error);
            }
        );

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const resizeHandler = () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        };
        window.addEventListener('resize', resizeHandler);

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', resizeHandler);
        };
    }, [canvas]);

    const toggleKeycaps = () => {
        if (!modelRef.current) return;
        modelRef.current.traverse((child: any) => {
            if (child.name?.includes('키캡')) {
                child.visible = !child.visible;
            }
        });
    };

    return { toggleKeycaps, sceneReady };
};