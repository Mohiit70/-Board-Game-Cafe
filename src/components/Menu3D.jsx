import React, { useEffect } from 'react';
import * as THREE from 'three';

const Menu3D = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('menu3d-container').appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return (
        <section id="menu3d">
            <h2>Our Menu</h2>
            <div id="menu3d-container" style={{ width: '100%', height: '400px', backgroundColor: '#f4f4f4' }}></div>
        </section>
    );
};

export default Menu3D;
