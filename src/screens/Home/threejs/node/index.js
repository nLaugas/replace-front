import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "./OrbitControls.js";

export default class Node extends Component {
  componentDidMount() {
    /// ---------------------------
    //  INIT
    /// ---------------------------
    let widthPersonal = 0;
    let heightPersonal = 0;
    let positionX = 0;
    let positionY = 0;

    function calcSize() {
      if (window.matchMedia("(max-width: 1000px)").matches) {
        widthPersonal = window.innerWidth;
        heightPersonal = window.innerHeight;
        positionX = 0;
        positionY = - (window.innerHeight * 0.10);
      } else {
        widthPersonal = window.innerWidth;
        heightPersonal = window.innerHeight;
        positionX = window.innerWidth / 4;
        positionY = 0;
      }
    }

    calcSize();

    this.container = document.getElementById("container");
    this.width = widthPersonal;
    this.height = heightPersonal;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.geometrySize = 200;
    this.blockTime = 5000;
    this.TransactionsPerSecond = 2000;
    this.activeStep = 1;
    this.maxNodes = 15;
    this.minNodesDistance = 200;

    this.draw = function (x, y, z, name, color) {
      let randNumber = Math.random();
      var geometry = new THREE.Geometry();
      geometry.name = name;

      for (let i = 0; i < 4000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = randNumber * 4000 - 100;
        randNumber = Math.random();
        vertex.y = randNumber * 4000 - 100;
        randNumber = Math.random();
        vertex.z = randNumber * 4000 - 100;
        geometry.vertices.push(vertex);
      }

      var material = new THREE.ParticleBasicMaterial({
        size: 4,
        color,
        opacity: 0.7,
        transparent: true,
      });

      var particles = new THREE.ParticleSystem(geometry, material);
      particles.rotation.x = randNumber * 6;
      particles.rotation.y = randNumber * 6;
      particles.rotation.z = randNumber * 6;
      particles.name = "PARTICULAS";
      this.scene.add(particles);
    };

    this.initApp = function () {
      this.initRenderer();
      this.launchApp();
      this.initMouseEvents();
      this.animate();
      this.draw(-200, 20, 20, "blue", 0x6e40c9);

      // prevent animation bug when tab is inactive
      //   TweenLite.lagSmoothing(0);
    };

    this.initRenderer = function () {
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(widthPersonal, heightPersonal);
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.sortObjects = false;
      this.container.appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.Fog(0x000000, 1000, 4000);

      this.camera = new THREE.PerspectiveCamera(
        50,
        this.width / this.height,
        1,
        10000
      );
      this.camera.position.set(0, 0, 1250);

      this.scene.add(this.camera);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = false;
      this.controls.dampingFactor = 0.07;
      this.controls.rotateSpeed = 0.04;
      // this.controls.autoRotate = true;

      var ambientLight = new THREE.AmbientLight(0x999999, 0.8);
      this.scene.add(ambientLight);

      var self = this;

      window.addEventListener("resize", onWindowResize.bind(this));
    };

    /// ---------------------------
    //  APP
    /// ---------------------------

    this.launchApp = function () {
      this.node = this.createNodeGroup();
      this.node.position.x = positionX;
      this.node.position.y = positionY;

      this.scene.add(this.node);
    };

    /// ---------------------------
    //  node UTILS
    /// ---------------------------

    this.createNodeGroup = function () {
      var nodeGroup = new THREE.Object3D();
      this.nodeRotationGroup = new THREE.Object3D();
      var nodeSegmentsGroup = new THREE.Object3D();

      var node = this.createnode();

      this.createNodeLight(this.nodeRotationGroup);
      this.createNodes(this.nodeRotationGroup);
      this.nodeRotationGroup.add(node);
      this.createSegments(nodeSegmentsGroup);
      nodeGroup.add(this.nodeRotationGroup);
      nodeGroup.add(nodeSegmentsGroup);

      return nodeGroup;
    };

    this.createnode = function () {
      var geometry = new THREE.SphereGeometry(this.geometrySize / 1.5, 15, 15);
      // materials are rendered in two parts to prevent transparency bug
      var materialFront = new THREE.MeshPhongMaterial({
        color: 0x11111f,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.5,
      });
      var materialBack = new THREE.MeshPhongMaterial({
        color: 0x11111f,
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0.5,
      });
      var nodeGroup = new THREE.Object3D();
      var node = new THREE.Mesh(geometry, materialFront);
      nodeGroup.add(node);
      var node = new THREE.Mesh(geometry, materialBack);
      nodeGroup.add(node);

      return nodeGroup;
    };

    this.createNodes = function (nodeRotationGroup) {
      this.nodes = [];
      var colors = ["6e40c9", "6e40c9", "6e40c9", "6e40c9", "6e40c9"];

      for (var i = 0; i < this.maxNodes; i++) {
        var color = parseInt(colors[i % colors.length], 16);
        var node = new THREE.Object3D();
        var nodeSphere = new THREE.Mesh(
          new THREE.SphereGeometry(6, 16, 8),
          new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.8,
          })
        );
        nodeSphere.position.x = -250;
        node.name = "nodeNodes";
        node.add(nodeSphere);
        node.rotation.x = Math.floor(Math.random() * Math.floor(100));
        node.rotation.z = Math.floor(Math.random() * Math.floor(100));
        node.rotation.y = Math.floor(Math.random() * Math.floor(100));
        nodeRotationGroup.add(node);
        this.nodes.push(node);
      }
    };

    this.createSegments = function (nodeSegmentsGroup) {
      var segments = this.maxNodes * this.maxNodes;

      this.positions = new Float32Array(segments * 3);
      this.colors = new Float32Array(segments * 3);
      this.particlePositions = new Float32Array(this.maxNodes * 3);

      var geometry = new THREE.BufferGeometry();

      geometry.addAttribute(
        "position",
        new THREE.BufferAttribute(this.positions, 3).setDynamic(true)
      );
      geometry.addAttribute(
        "color",
        new THREE.BufferAttribute(this.colors, 3).setDynamic(true)
      );
      geometry.computeBoundingSphere();
      geometry.setDrawRange(0, 0);

      var material = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      this.linesMesh = new THREE.LineSegments(geometry, material);
      nodeSegmentsGroup.add(this.linesMesh);
    };
    this.setNodesPosition = function () {
      this.linesMesh.geometry.setDrawRange(0, this.numConnected * 2);
      this.linesMesh.geometry.attributes.position.needsUpdate = true;
      this.linesMesh.geometry.attributes.color.needsUpdate = true;
    };
    this.compareNodesPosition = function (i) {
      for (var j = i + 1; j < this.maxNodes; j++) {
        var dx = this.particlePositions[i * 3] - this.particlePositions[j * 3];
        var dy =
          this.particlePositions[i * 3 + 1] - this.particlePositions[j * 3 + 1];
        var dz =
          this.particlePositions[i * 3 + 2] - this.particlePositions[j * 3 + 2];
        var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < this.minNodesDistance) {
          var alpha = 1.0 - dist / this.minNodesDistance;

          this.positions[this.vertexPos++] = this.particlePositions[i * 3];
          this.positions[this.vertexPos++] = this.particlePositions[i * 3 + 1];
          this.positions[this.vertexPos++] = this.particlePositions[i * 3 + 2];

          this.positions[this.vertexPos++] = this.particlePositions[j * 3];
          this.positions[this.vertexPos++] = this.particlePositions[j * 3 + 1];
          this.positions[this.vertexPos++] = this.particlePositions[j * 3 + 2];

          this.colors[this.colorPos++] = alpha;
          this.colors[this.colorPos++] = alpha;
          this.colors[this.colorPos++] = alpha;

          this.colors[this.colorPos++] = alpha;
          this.colors[this.colorPos++] = alpha;
          this.colors[this.colorPos++] = alpha;

          this.numConnected++;
        }
      }
    };

    this.createNodeLight = function (nodeRotationGroup) {
      var color = parseInt("6e40c9", 16);
      var light = new THREE.PointLight(color, 10, 500, 1);
      light.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(55, 16, 8),
          new THREE.MeshBasicMaterial({
            color: 0x6e40c9,
            transparent: true,
            opacity: 1,
          })
        )
      );
      light.castShadow = false;

      light.name = "nodeLight";
      nodeRotationGroup.add(light);
    };

    /// ---------------------------
    //  UTILS
    /// ---------------------------

    const onWindowResize = function (self) {
      calcSize();  //ACTIVAR SOLO EN TESTING
      this.width = widthPersonal;
      this.height = heightPersonal;
      this.centerX = this.width / 2;
      this.centerY = this.height / 2;

      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.width, this.height);
    };
    
    const clock = new THREE.Clock();
    this.animate = function (now) {
      const elapsedTime = clock.getElapsedTime();

      this.controls.update();
      requestAnimationFrame(this.animate.bind(this));
      var particles = this.scene.getObjectByName("PARTICULAS");

      if (particles) {
        particles.rotation.y += 0.005;
      }
      if (this.nodeRotationGroup && this.rotationX && this.rotationY) {
        this.nodeRotationGroup.rotation.y +=
          (this.rotationX - this.nodeRotationGroup.rotation.y) * 0.05;
        this.nodeRotationGroup.rotation.x +=
          (this.rotationY - this.nodeRotationGroup.rotation.x) * 0.05;
      }

      this.nodeRotationGroup.position.y =
        this.nodeRotationGroup.position.y - Math.sin(elapsedTime) / 5;

      if (this.nodes) {
        this.vertexPos = 0;
        this.colorPos = 0;
        this.numConnected = 0;
        this.setNodesPosition();

        this.nodes[0].rotation.y = now * 0.00052;
        this.nodes[1].rotation.y = now * -0.00053;
        this.nodes[2].rotation.y = now * 0.00055;
        this.nodes[3].rotation.y = now * -0.00057;
        this.nodes[4].rotation.y = now * 0.000511;
        this.nodes[5].rotation.y = now * -0.000513;
        this.nodes[6].rotation.y = now * 0.000517;
        this.nodes[7].rotation.x = now * -0.000519;
        this.nodes[8].rotation.x = now * 0.000523;
        this.nodes[9].rotation.x = now * -0.000529;
        this.nodes[10].rotation.x = now * 0.000531;
        this.nodes[11].rotation.x = now * -0.000537;
        this.nodes[12].rotation.x = now * 0.000541;
        this.nodes[13].rotation.x = now * -0.000543;
        this.nodes[14].rotation.x = now * 0.000547;
        // this.nodes[15].rotation.x = now * -0.000553;
        // this.nodes[16].rotation.z = now * 0.000559;
        // this.nodes[17].rotation.z = now * -0.000561;
        // this.nodes[18].rotation.z = now * 0.000567;
        // this.nodes[19].rotation.z = now * -0.000571;
        // this.nodes[20].rotation.z = now * 0.000573;
        // this.nodes[21].rotation.z = now * -0.000579;
        // this.nodes[22].rotation.z = now * 0.000583;
        // this.nodes[23].rotation.z = now * -0.000589;
        // this.nodes[24].rotation.z = now * 0.000597;
      }

      this.renderer.render(this.scene, this.camera);
    };

    this.findMouseCoords = function (event) {
      if (event) {
        //FireFox
        this.mouseX = event.pageX - document.body.scrollLeft;
        this.mouseY = event.pageY - document.body.scrollTop;
      } else {
        //IE
        this.mouseX = window.event.x + 2;
        this.mouseY = window.event.y + 2;
      }

      var diffX = this.mouseX - this.centerX;
      var diffY = this.mouseY - this.centerY;
      var percentX = diffX / this.centerX;
      var percentY = diffY / this.centerY;

      this.rotationX = percentX / 2;
      this.rotationY = percentY / 2;
    };
    this.findMouseCoords = this.findMouseCoords.bind(this);

    this.initMouseEvents = function () {
      this.container.addEventListener("mousemove", this.findMouseCoords);
    };
    this.stopMouseEvents = function () {
      this.container.removeEventListener("mousemove", this.findMouseCoords);
    };

    /// ---------------------------
    //  START
    /// ---------------------------
    this.initApp();
  }

  render() {
    return <div id="container" />;
  }
}
