import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "../node/OrbitControls";

export default class Clustering extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();

    let widthPersonal = 0;
    let heightPersonal = 0;

    let container = document.getElementById("container2"),
      renderer,
      camera,
      i,
      controls;

    function calcSize(){
      if (window.matchMedia("(min-width: 1250px)").matches) {
        widthPersonal = window.innerWidth / 3;
        heightPersonal = window.innerHeight - 300;
      } else {
        widthPersonal = window.innerWidth * 0.9;
        heightPersonal = window.innerHeight / 2;
      }
    }

    function init() {
      renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
      calcSize();
      renderer.setSize(widthPersonal , heightPersonal);
      container.appendChild(renderer.domElement);
      renderer.setClearColor(0x000000, 0);

      camera = new THREE.PerspectiveCamera(
        45,
        widthPersonal / heightPersonal,
        1,
        10000
      );

      camera.position.y = 100;
      camera.position.z = 4000;
      camera.position.x = 250;

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.autoRotate = true;

      window.addEventListener("resize", onResize, false);
    }

    function onResize() {

      calcSize();
      camera.aspect = widthPersonal / heightPersonal;
      camera.updateProjectionMatrix();

      renderer.setSize(widthPersonal , heightPersonal);
    }

    function draw(x, y, z, name, color, density) {
      let randNumber = Math.random();
      var geometry = new THREE.Geometry();
      geometry.name = name;

      if (density >= 1) {
        for (i = 0; i < 2000; i++) {
          var vertex = new THREE.Vector3();
          vertex.x = randNumber * 300 - x;
          randNumber = Math.random();
          vertex.y = randNumber * 300 - y;
          randNumber = Math.random();
          vertex.z = randNumber * 300 - z;
          geometry.vertices.push(vertex);
        }
        if (density >= 2) {
          for (i = 0; i < 2000; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = randNumber * 375 - x;
            randNumber = Math.random();
            vertex.y = randNumber * 375 - y;
            randNumber = Math.random();
            vertex.z = randNumber * 375 - z;
            geometry.vertices.push(vertex);
          }
          if (density >= 3) {
            for (i = 0; i < 600; i++) {
              var vertex = new THREE.Vector3();
              vertex.x = randNumber * 450 - x;
              randNumber = Math.random();
              vertex.y = randNumber * 450 - y;
              randNumber = Math.random();
              vertex.z = randNumber * 450 - z;
              geometry.vertices.push(vertex);
            }
          }
        }
      }

      var material = new THREE.ParticleBasicMaterial({ size: 7, color });

      var particles = new THREE.ParticleSystem(geometry, material);
      particles.rotation.x = randNumber * 6;
      particles.rotation.y = randNumber * 6;
      particles.rotation.z = randNumber * 6;
      scene.add(particles);

      material = new THREE.ParticleBasicMaterial({ size: 1, color });
      var particles = new THREE.ParticleSystem(geometry, material);
      particles.rotation.x = randNumber * 6;
      particles.rotation.y = randNumber * 6;
      particles.rotation.z = randNumber * 6;
      scene.add(particles);

      material = new THREE.ParticleBasicMaterial({ size: 2, color });
      var particles = new THREE.ParticleSystem(geometry, material);
      particles.rotation.x = randNumber * 6;
      particles.rotation.y = randNumber * 6;
      particles.rotation.z = randNumber * 6;
      scene.add(particles);
    }

    function render() {
      requestAnimationFrame(render);
      controls.update();

      renderer.render(scene, camera);
    }

    init();
    const geometry = new THREE.BoxGeometry(1400, 1400, 1400);
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x0d1117, linewidth:1000 })
    );
    scene.add(line);
    draw(-200, 20, 20, "blue", 0x0000ff, 3);
    draw(30, 30, 600, "red", 0xff0000, 2);
    draw(200, 600, 40, "green", 0x00ff00, 1);
    draw(50, 50, 50, "pink", 0xdf33ff, 3);
    draw(400, 400, 400, "yellow", 0xf8fc12, 1);
    draw(400, 0, 400, "orange", 0xfcb912, 3);

    render();
  }
  render() {
    return <div id="container2" />;
  }
}
