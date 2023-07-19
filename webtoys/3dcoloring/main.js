import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import * as THREE from "three";
import gsap from "gsap";

let oldPetals = "#FF0000";
let oldStem = "#008000";
let oldCenter = "#FFFF00";

function checkForNew() {
  const petals = document.getElementById("petals").value;
  const stem = document.getElementById("stem").value;
  const center = document.getElementById("center").value;

  if (petals != oldPetals && stem != oldStem && center != oldCenter) {
    oldPetals = petals;
    oldStem = stem;
    oldCenter = center;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}

document.getElementById("petals").addEventListener("input", (e) => {
  petals.material.color.setHex(parseInt(e.target.value.slice(1), 16));
  checkForNew();
});

document.getElementById("stem").addEventListener("input", (e) => {
  stem.material.color.setHex(parseInt(e.target.value.slice(1), 16));
  checkForNew();
});

document.getElementById("center").addEventListener("input", (e) => {
  center.material.color.setHex(parseInt(e.target.value.slice(1), 16));
  checkForNew();
});

document.getElementById("canvas").addEventListener("click", () => {
  // confetti({
  //   particleCount: 100,
  //   spread: 70,
  //   origin: { y: 0.6 },
  // });
});

console.log("linked");

// const gui = new dat.GUI();

const canvas = document.getElementById("canvas");

const loader = new GLTFLoader();

const scene = new THREE.Scene();
scene.background = null;
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.offsetWidth / canvas.offsetHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
canvas.append(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x000000,0);
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
console.log(canvas.offsetWidth, canvas.offsetHeight);

window.addEventListener("resize", () => {
  camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
});

camera.position.set(-10, 0, 0);

window.addEventListener("resize", () => {
  camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
});

let center;
let petals;
let stem;

const petalsColor = new THREE.MeshBasicMaterial({
  color: new THREE.Color("red"),
});

const centerColor = new THREE.MeshBasicMaterial({
  color: new THREE.Color("yellow"),
});

const stemColor = new THREE.MeshBasicMaterial({
  color: new THREE.Color("green"),
});

loader.load("./flower.glb", function (gltf) {
  console.log("loaded");

  let stemMesh = gltf.scene.children[0].geometry;
  let petalsMesh = gltf.scene.children[1].geometry;
  let centerMesh = gltf.scene.children[2].geometry;

  center = new THREE.Mesh(centerMesh, centerColor);
  petals = new THREE.Mesh(petalsMesh, petalsColor);
  stem = new THREE.Mesh(stemMesh, stemColor);

  // gui.add(mesh.position,'x').min(-5).max(5).step(0.001).name('flowerMeshPositionX');
  // gui.add(mesh.position, 'y').min(-5).max(5).step(0.001).name('flowerMeshPositionY');
  // gui.add(mesh.position, 'z').min(-5).max(5).step(0.001).name('flowerMeshPositionZ');
  scene.add(center);
  scene.add(petals);
  scene.add(stem);

  gsap.to(center.position, {
    y: 1,
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
  gsap.to(petals.position, {
    y: 1,
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
  gsap.to(stem.position, {
    y: 1,
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
});

// gui.add(cube.position,'x').min(-5).max(5).step(0.001).name('MeshPositionX');
// gui.add(cube.position, 'y').min(-5).max(5).step(0.001).name('MeshPositionY');
// gui.add(cube.position, 'z').min(-5).max(5).step(0.001).name('MeshPositionZ');

// gui.add(camera.position,'x').min(-5).max(5).step(0.001).name('cameraMeshPositionX');
// gui.add(camera.position, 'y').min(-5).max(5).step(0.001).name('cameraMeshPositionY');
// gui.add(camera.position, 'z').min(-5).max(5).step(0.001).name('cameraMeshPositionZ');

camera.position.y += 7.5;

// const size = 10;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  center.rotation.y += 0.005;
  stem.rotation.y += 0.005;
  petals.rotation.y += 0.005;
}

animate();
