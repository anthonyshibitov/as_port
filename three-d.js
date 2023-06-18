import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import * as THREE from "three";

console.log("three loaded!");

const loader = new GLTFLoader();

const clock = new THREE.Clock();
let time = 0;

const [canvas] = document.getElementsByTagName("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor("#ffffff");
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0xff22ee, wireframe: true });
const cube = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial( { color: 0x22ff33, wireframe: true });
const cube2 = new THREE.Mesh(geometry, material);
cube2.translateX(2);
cube2.translateY(2);
cube2.scale.set(0.3, 0.3, 0.3);

const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshBasicMaterial( { color: 0x22ff33, wireframe: true });
const cube3 = new THREE.Mesh(geometry, material);
cube3.translateX(-5);
cube3.translateY(-5);
cube3.translateZ(-5);
cube3.scale.set(6, 6, 6);

scene.add(cube);
scene.add(cube2);
scene.add(cube3);

var target={x:0,y:0,z:0};
var camera_offset={x:7,y:7,z:7};
var camera_speed=0.2;

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

function animate() {
    requestAnimationFrame(animate);

    clock.getDelta();
    time = clock.elapsedTime.toFixed(2);

    renderer.render(scene, camera);
    cube.rotateX(0.01);
    cube.rotateY(0.01);
    cube2.rotateZ(0.005);
    cube2.rotateX(0.01);
    cube3.rotateY(0.01);

    target.x=cube.position.x;
    target.y=cube.position.y
    target.z=cube.position.z;
    camera.position.x=target.x+camera_offset.x*(Math.sin(time*camera_speed));
    camera.position.z=target.z+camera_offset.z*(Math.cos(time*camera_speed));
    camera.position.y=target.y+camera_offset.y;
    camera.lookAt(target.x,target.y,target.z);

    if(Math.floor(Math.random()* 1000) == 15){
        console.log("burst");
        camera_offset = {x: -camera_offset.x, y: -camera_offset.y, z: -camera_offset.z};
    }
}

animate();

/* CREDIT FOR ROTATING CAMERA CODE:
https://discourse.threejs.org/t/how-can-auto-rotate-camera-around-the-object/40590/3
thank you, this would have taken me hours lol */