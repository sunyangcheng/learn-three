<template>
  <div class="home">
    <div class="canvas-container" ref="canvasDom"></div>
  </div>
</template>


<script setup>
import * as THREE from 'three'; 
import { onMounted, reactive, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

let controls;
let canvasDom = ref(null);
// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 6);
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  // 抗锯齿
  antialias: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  renderer.render(scene, camera);
  controls && controls.update();
  requestAnimationFrame(render);
}

onMounted(() => {
  // 将渲染器添加到页面中
  canvasDom.value.appendChild(renderer.domElement);
  // 初始化渲染器，渲染背景
  renderer.setClearColor("#000");
  scene.background = new THREE.Color("#ccc");
  scene.environment = new THREE.Color("#ccc");
  render();

  // 添加网格地面
  const gridHelper = new THREE.GridHelper(10, 10);
  gridHelper.material.opacity = 0.2;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  // 添加控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // 添加gltf汽车模型
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('./draco/gltf/');
  loader.setDRACOLoader(dracoLoader);
  loader.load('./model/bmw01.glb', (gltf) => {
    const bmw = gltf.scene;
    scene.add(bmw);
  });

  // 添加灯光


  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 10);
  scene.add(light);
  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10);
  scene.add(light2);
  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);
  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light5.position.set(0, 10, 0);
  scene.add(light5);
  const light6 = new THREE.DirectionalLight(0xffffff, 0.3);
  light6.position.set(5, 10, 0);
  scene.add(light6);
  const light7 = new THREE.DirectionalLight(0xffffff, 0.3);
  light7.position.set(0, 10, 5);
  scene.add(light7);
  const light8 = new THREE.DirectionalLight(0xffffff, 0.3);
  light8.position.set(0, 10, -5);
  scene.add(light8);
  const light9 = new THREE.DirectionalLight(0xffffff, 0.3);
  light9.position.set(-5, 10, 0);
  scene.add(light9);


});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
