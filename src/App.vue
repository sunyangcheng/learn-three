<template>
  <div class="home">
    <div class="canvas-container" ref="canvasDom"></div>

    <div class="home-content">
      <div class="home-content-title">
        <h1>汽车展示与选配</h1>
      </div>
      <h2>选择车身颜色</h2>
      <div class="select">
        <div class="select-item" v-for="(item, index) in colors" @click="selectColor(index)">
          <div class="select-item-color" :style="{backgroundColor: item}"></div>
          <div class="select-item-text">{{item}}</div>
        </div>
      </div>
      <h2>选择贴膜材质</h2>
      <div class="select">
        <div class="select-item" v-for="(item, index) in materials" @click="selectMaterial(index)">
          <button class="select-item-btn">{{item.name}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import * as THREE from 'three'; 
import { onMounted, reactive, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

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

let wheels = [];
let carBody, frontCar, hoodCar, glassCar;
// 创建材质
const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x0000ff,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const frontMaterial = new THREE.MeshPhysicalMaterial({
  color: "gray",
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const hoodMaterial = new THREE.MeshPhysicalMaterial({
  color: "blue",
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const wheelMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  transparent: true,
  transmission: 1,
  roughness: 0,
  metalness: 0,
});

let colors = [
  "red",
  "purple",
  "green",
  "blue",
  "black",
  "white",
  "gray",
];

let selectColor = (index) => {
  bodyMaterial.color = new THREE.Color(colors[index]);
  frontMaterial.color = new THREE.Color(colors[index]);
  hoodMaterial.color = new THREE.Color(colors[index]);
  glassMaterial.color = new THREE.Color(colors[index]);
  wheelMaterial.color = new THREE.Color(colors[index]);
};

let materials = [{name: "磨砂", value: 0}, {name: "冰晶", value: 1}];

let selectMaterial = (index) => {
  bodyMaterial.clearcoatRoughness = materials[index].value;
  frontMaterial.clearcoatRoughness = materials[index].value;
  hoodMaterial.clearcoatRoughness = materials[index].value;
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
    bmw.traverse((child) => {
      if (child.isMesh) {
        // console.log(child.name);
      }
      // 判断是否是轮毂
      if (child.isMesh && child.name.includes('轮毂')) {
        wheels.push(child);
        wheels.forEach((wheel) => {
          wheel.material = wheelMaterial;
        });
      }
      // 判断是否是车身
      if (child.isMesh && child.name.includes('Mesh002')) {
        carBody = child;
        carBody.material = bodyMaterial;
      }
      // 判断是否是前脸
      if (child.isMesh && child.name.includes('前脸')) {
        frontCar = child;
        frontCar.material = frontMaterial;
      }
      // 判断是否是引擎盖
      if (child.isMesh && child.name.includes('引擎盖_1')) {
        hoodCar = child;
        hoodCar.material = hoodMaterial;
      }
      // 判断是否是车窗
      if (child.isMesh && child.name.includes('挡风玻璃')) {
        glassCar = child;
        glassCar.material = glassMaterial;
      }

    }),
    scene.add(bmw);
  });

  // const objLoader = new OBJLoader(); // ob加载器i
  // const mtlLoader = new MTLLoader(); // 材质文件加载器
  // mtlLoader.load('./model/bugatti.mtl', (materials) => {
  //   objLoader.setMaterials(materials);
  //   objLoader.load('./model/bugatti.obj', (obj) => {
  //     const car = obj;
  //     // car.scale.set(-10, -10, -10);
  //     scene.add(car);
  //   });
  // })

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
.home-content {
  position: fixed;
  top: 0;
  right: 20px;
}
.select {
  display: flex;
}
.select-item-color {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}
.select-item-btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
}
.select-item-btn:first-child {
  margin-right: 10px;
}
</style>
