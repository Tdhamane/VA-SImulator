// Web-Based Vibration Analysis Fault Detection Simulation (Script.js)
// Import Three.js (Use CDN or local installation)
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

// Scene setup
let scene, camera, renderer;
init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5).normalize();
    scene.add(light);

    // Create Motor Model
    const geometry = new THREE.CylinderGeometry(2, 2, 5, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const motor = new THREE.Mesh(geometry, material);
    motor.rotation.z = Math.PI / 2;
    scene.add(motor);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
