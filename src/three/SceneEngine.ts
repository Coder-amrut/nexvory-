import * as THREE from 'three';

export interface SceneEngineOptions {
  canvas: HTMLCanvasElement;
  onLoaded?: () => void;
  onError?: (err: Error) => void;
}

export class SceneEngine {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;
  private isDestroyed: boolean = false;
  private animationFrameId: number = 0;

  // Groups
  private rootGroup: THREE.Group;
  private coreGroup: THREE.Group;
  private softwareGroup: THREE.Group;
  private neuralGroup: THREE.Group;
  private cloudGroup: THREE.Group;
  private cyberGroup: THREE.Group;
  private ambientParticles!: THREE.Points;

  // Specific elements
  private coreInner!: THREE.Mesh;
  private coreOuterWire!: THREE.LineSegments;
  private ring1!: THREE.Mesh;
  private ring2!: THREE.Mesh;
  private softwareModules: THREE.Mesh[] = [];
  private neuralNodes!: THREE.InstancedMesh;
  private neuralLines!: THREE.LineSegments;
  private cloudPlanes: THREE.Group[] = [];
  private cyberShield!: THREE.LineSegments;
  private scannerRing!: THREE.Mesh;

  // Materials for live property updates
  private cyberMaterial!: THREE.LineBasicMaterial;
  private neuralLineMaterial!: THREE.LineBasicMaterial;
  private coreMaterial!: THREE.MeshPhysicalMaterial;

  // State
  private targetScrollProgress: number = 0;
  private currentScrollProgress: number = 0;
  private mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  private activeComponent: 'software' | 'ai' | 'cloud' | 'security' | null = null;
  private performanceMode: 'ultra' | 'efficient' = 'ultra';
  private width: number = window.innerWidth;
  private height: number = window.innerHeight;

  constructor(options: SceneEngineOptions) {
    this.canvas = options.canvas;
    this.clock = new THREE.Clock();

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;
    } catch (e) {
      if (options.onError) options.onError(e as Error);
      throw e;
    }

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x08090C, 0.022);

    this.camera = new THREE.PerspectiveCamera(
      this.width < 768 ? 54 : 44,
      this.width / this.height,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 14);

    this.rootGroup = new THREE.Group();
    this.coreGroup = new THREE.Group();
    this.softwareGroup = new THREE.Group();
    this.neuralGroup = new THREE.Group();
    this.cloudGroup = new THREE.Group();
    this.cyberGroup = new THREE.Group();

    this.scene.add(this.rootGroup);
    this.rootGroup.add(this.coreGroup);
    this.rootGroup.add(this.softwareGroup);
    this.rootGroup.add(this.neuralGroup);
    this.rootGroup.add(this.cloudGroup);
    this.rootGroup.add(this.cyberGroup);

    this.setupLighting();
    this.buildCore();
    this.buildSoftwareModules();
    this.buildNeuralNetwork();
    this.buildCloudInfrastructure();
    this.buildCyberPerimeter();
    this.buildAmbientField();

    this.bindEvents();
    this.startRenderLoop();

    if (options.onLoaded) {
      setTimeout(options.onLoaded, 100);
    }
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0x0e172a, 1.4);
    this.scene.add(ambient);

    const cyanKey = new THREE.DirectionalLight(0x00F0FF, 3.2);
    cyanKey.position.set(6, 8, 10);
    this.scene.add(cyanKey);

    const cobaltFill = new THREE.DirectionalLight(0x0066FF, 2.4);
    cobaltFill.position.set(-8, -6, -5);
    this.scene.add(cobaltFill);

    const corePoint = new THREE.PointLight(0x00F0FF, 4.0, 18);
    corePoint.position.set(0, 0, 0);
    this.coreGroup.add(corePoint);
  }

  private buildCore() {
    // 1. Central faceted crystalline polyhedron
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 0);
    this.coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x07111E,
      emissive: 0x002244,
      roughness: 0.1,
      metalness: 0.85,
      transparent: true,
      opacity: 0.9,
      transmission: 0.35,
      ior: 1.5,
    });
    this.coreInner = new THREE.Mesh(innerGeo, this.coreMaterial);
    this.coreGroup.add(this.coreInner);

    // Wireframe cage
    const wireGeo = new THREE.WireframeGeometry(innerGeo);
    this.coreOuterWire = new THREE.LineSegments(
      wireGeo,
      new THREE.LineBasicMaterial({ color: 0x00F0FF, transparent: true, opacity: 0.85 })
    );
    this.coreOuterWire.scale.setScalar(1.02);
    this.coreGroup.add(this.coreOuterWire);

    // 2. Counter-rotating orbital rings
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00F0FF });
    this.ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    this.ring1.rotation.x = Math.PI / 3;
    this.coreGroup.add(this.ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x0066FF });
    this.ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    this.ring2.rotation.y = Math.PI / 4;
    this.coreGroup.add(this.ring2);
  }

  private buildSoftwareModules() {
    // Modular computational boxes that separate and articulate
    const boxGeo = new THREE.BoxGeometry(0.8, 0.5, 0.8);
    const moduleMat = new THREE.MeshPhysicalMaterial({
      color: 0x0b1320,
      emissive: 0x001733,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85,
    });

    const positions = [
      [-3.2, 1.8, -1.2],
      [3.2, 1.6, -0.8],
      [-2.8, -2.0, 1.2],
      [2.9, -1.9, 0.9],
      [0, 3.4, -1.5],
      [0, -3.2, -1.0],
    ];

    positions.forEach((pos) => {
      const mod = new THREE.Mesh(boxGeo, moduleMat);
      mod.position.set(pos[0], pos[1], pos[2]);

      // Wireframe border on each module
      const wire = new THREE.LineSegments(
        new THREE.WireframeGeometry(boxGeo),
        new THREE.LineBasicMaterial({ color: 0x00F0FF, transparent: true, opacity: 0.7 })
      );
      mod.add(wire);

      this.softwareModules.push(mod);
      this.softwareGroup.add(mod);
    });
  }

  private buildNeuralNetwork() {
    const nodeCount = 42;
    const sphereGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF });

    this.neuralNodes = new THREE.InstancedMesh(sphereGeo, nodeMat, nodeCount);
    const dummy = new THREE.Object3D();
    const nodeCoords: THREE.Vector3[] = [];

    // Distribute nodes in an organic tensor cloud
    for (let i = 0; i < nodeCount; i++) {
      const radius = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodeCoords.push(pos);

      dummy.position.copy(pos);
      dummy.scale.setScalar(0.7 + Math.random() * 0.8);
      dummy.updateMatrix();
      this.neuralNodes.setMatrixAt(i, dummy.matrix);
    }
    this.neuralNodes.instanceMatrix.needsUpdate = true;
    this.neuralGroup.add(this.neuralNodes);

    // Connect close nodes with glowing lines
    const linePoints: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodeCoords[i].distanceTo(nodeCoords[j]);
        if (dist < 2.4) {
          linePoints.push(
            nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z,
            nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    this.neuralLineMaterial = new THREE.LineBasicMaterial({
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.35,
    });
    this.neuralLines = new THREE.LineSegments(lineGeo, this.neuralLineMaterial);
    this.neuralGroup.add(this.neuralLines);
  }

  private buildCloudInfrastructure() {
    // 3 tiered concentric disk grids representing distributed regions
    const tiers = [-2.2, 0, 2.2];
    tiers.forEach((yPos, idx) => {
      const tierGroup = new THREE.Group();
      tierGroup.position.y = yPos;

      const ringGeo = new THREE.RingGeometry(2.8 + idx * 0.8, 2.82 + idx * 0.8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx === 1 ? 0x00F0FF : 0x0066FF,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      tierGroup.add(ring);

      // Micro server nodes around the ring
      const serverGeo = new THREE.BoxGeometry(0.12, 0.4, 0.12);
      const serverMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF });
      const count = 6 + idx * 3;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const rad = 2.81 + idx * 0.8;
        const s = new THREE.Mesh(serverGeo, serverMat);
        s.position.set(Math.cos(angle) * rad, 0.2, Math.sin(angle) * rad);
        tierGroup.add(s);
      }

      this.cloudPlanes.push(tierGroup);
      this.cloudGroup.add(tierGroup);
    });
  }

  private buildCyberPerimeter() {
    // Geodesic cryptographic shield cage
    const shieldGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const wireGeo = new THREE.WireframeGeometry(shieldGeo);
    this.cyberMaterial = new THREE.LineBasicMaterial({
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.2,
    });
    this.cyberShield = new THREE.LineSegments(wireGeo, this.cyberMaterial);
    this.cyberGroup.add(this.cyberShield);

    // Laser scanner sweep ring
    const scanGeo = new THREE.TorusGeometry(4.25, 0.03, 16, 120);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.8,
    });
    this.scannerRing = new THREE.Mesh(scanGeo, scanMat);
    this.scannerRing.rotation.x = Math.PI / 2;
    this.cyberGroup.add(this.scannerRing);
  }

  private buildAmbientField() {
    const particleCount = this.performanceMode === 'ultra' ? 650 : 250;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x00F0FF);
    const cobalt = new THREE.Color(0x0066FF);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 35;
      positions[idx + 1] = (Math.random() - 0.5) * 35;
      positions[idx + 2] = (Math.random() - 0.5) * 30 - 2;

      const mix = Math.random();
      const col = cyan.clone().lerp(cobalt, mix);
      colors[idx] = col.r;
      colors[idx + 1] = col.g;
      colors[idx + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    this.ambientParticles = new THREE.Points(geometry, material);
    this.scene.add(this.ambientParticles);
  }

  private bindEvents() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  private onResize = () => {
    if (this.isDestroyed) return;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.fov = this.width < 768 ? 54 : 44;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  };

  private onMouseMove = (e: MouseEvent) => {
    this.mouse.targetX = (e.clientX / this.width) * 2 - 1;
    this.mouse.targetY = -(e.clientY / this.height) * 2 + 1;
  };

  public setScrollProgress(progress: number) {
    this.targetScrollProgress = Math.max(0, Math.min(1, progress));
  }

  public setActiveComponent(comp: 'software' | 'ai' | 'cloud' | 'security' | null) {
    this.activeComponent = comp;
  }

  public setPerformanceMode(mode: 'ultra' | 'efficient') {
    this.performanceMode = mode;
    this.renderer.setPixelRatio(mode === 'ultra' ? Math.min(window.devicePixelRatio, 1.8) : 1.0);
  }

  private startRenderLoop() {
    const animate = () => {
      if (this.isDestroyed) return;
      this.animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = this.clock.getElapsedTime();

      // Smooth lerp mouse and scroll
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;
      this.currentScrollProgress += (this.targetScrollProgress - this.currentScrollProgress) * 0.08;

      const p = this.currentScrollProgress;

      // 1. Natural idle rotations
      this.coreInner.rotation.x = elapsedTime * 0.2;
      this.coreInner.rotation.y = elapsedTime * 0.25;
      this.coreOuterWire.rotation.x = elapsedTime * 0.2;
      this.coreOuterWire.rotation.y = elapsedTime * 0.25;

      this.ring1.rotation.z = elapsedTime * 0.4;
      this.ring2.rotation.x = elapsedTime * -0.35;

      this.scannerRing.position.y = Math.sin(elapsedTime * 2.0) * 3.8;
      this.cyberShield.rotation.y = elapsedTime * 0.15;
      this.neuralGroup.rotation.y = elapsedTime * 0.08;
      this.ambientParticles.rotation.y = elapsedTime * 0.015;

      // 2. Continuous Scroll Choreography across Narrative Chapters
      // Camera trajectory: travels smoothly in Z and Y with subtle tilts
      let targetCamZ = 14;
      let targetCamY = 0;
      let targetCamX = 0;

      if (p < 0.12) {
        // Chapter 1: Hero / Entry
        targetCamZ = 14 - p * 15; // 14 -> 12.2
        targetCamY = 0;
        this.rootGroup.rotation.y = p * 1.5;
        this.softwareGroup.scale.setScalar(0.7);
        this.neuralGroup.scale.setScalar(0.5);
        this.cloudGroup.scale.setScalar(0.4);
        this.cyberGroup.scale.setScalar(0.4);
        this.cyberMaterial.opacity = 0.15;
      } else if (p < 0.25) {
        // Chapter 2: Philosophy (0.12 - 0.25)
        const localP = (p - 0.12) / 0.13;
        targetCamZ = 12.2 - localP * 2.5; // 12.2 -> 9.7
        targetCamY = localP * 1.2;
        targetCamX = -localP * 1.5;
        this.rootGroup.rotation.y = 0.18 + localP * 0.4;
        this.coreInner.scale.setScalar(1 + localP * 0.2);
      } else if (p < 0.38) {
        // Chapter 3: What We Build (0.25 - 0.38) - Modular Software Separation
        const localP = (p - 0.25) / 0.13;
        targetCamZ = 9.7 - localP * 1.5; // 9.7 -> 8.2
        targetCamX = 2.0 * localP;
        targetCamY = -0.5 * localP;
        this.softwareGroup.scale.setScalar(0.7 + localP * 0.5);
        
        // Modules expand outward
        this.softwareModules.forEach((mod, idx) => {
          const factor = 1.0 + localP * 0.8;
          mod.scale.setScalar(factor * (0.9 + Math.sin(elapsedTime * 2 + idx) * 0.08));
          mod.position.y += Math.sin(elapsedTime + idx) * 0.005;
        });
      } else if (p < 0.52) {
        // Chapter 4: Intelligence Core (0.38 - 0.52) - Neural Computational Lattice
        const localP = (p - 0.38) / 0.14;
        targetCamZ = 8.2 - localP * 0.5;
        targetCamX = 0;
        targetCamY = 0.5;
        this.neuralGroup.scale.setScalar(0.5 + localP * 0.65);
        this.neuralLineMaterial.opacity = 0.35 + localP * 0.45;
      } else if (p < 0.65) {
        // Chapter 5: Industries & Cloud Architecture (0.52 - 0.65)
        const localP = (p - 0.52) / 0.13;
        targetCamZ = 7.7 + localP * 1.8;
        targetCamY = -localP * 1.8;
        this.cloudGroup.scale.setScalar(0.4 + localP * 0.7);
        this.cloudPlanes.forEach((plane, i) => {
          plane.rotation.y = elapsedTime * (0.2 + i * 0.1);
        });
      } else if (p < 0.78) {
        // Chapter 6: Case Studies & Process (0.65 - 0.78)
        const localP = (p - 0.65) / 0.13;
        targetCamZ = 9.5 - localP * 1.5;
        targetCamX = -1.5 * Math.sin(localP * Math.PI);
        targetCamY = 1.0 * localP;
      } else if (p < 0.90) {
        // Chapter 7: Cybersecurity & Trust (0.78 - 0.90)
        const localP = (p - 0.78) / 0.12;
        targetCamZ = 8.0 + localP * 2.0;
        this.cyberGroup.scale.setScalar(0.4 + localP * 0.7);
        this.cyberMaterial.opacity = 0.2 + localP * 0.6;
      } else {
        // Chapter 8: Convergence & Closing (0.90 - 1.0)
        const localP = (p - 0.9) / 0.1;
        targetCamZ = 10.0 + localP * 2.5; // Smooth camera step back
        targetCamX = 0;
        targetCamY = 0;
        // All elements converge cleanly into unified alignment
        this.softwareGroup.scale.setScalar(1.2 - localP * 0.2);
        this.cyberMaterial.opacity = 0.8 - localP * 0.4;
        this.coreMaterial.opacity = 0.9 + localP * 0.1;
      }

      // 3. Interactive Component Highlight Override (Section 04)
      if (this.activeComponent) {
        if (this.activeComponent === 'software') {
          this.softwareGroup.scale.setScalar(1.4);
          this.neuralGroup.scale.setScalar(0.4);
          this.cloudGroup.scale.setScalar(0.3);
          this.cyberGroup.scale.setScalar(0.3);
        } else if (this.activeComponent === 'ai') {
          this.softwareGroup.scale.setScalar(0.5);
          this.neuralGroup.scale.setScalar(1.45);
          this.neuralLineMaterial.opacity = 0.9;
          this.cloudGroup.scale.setScalar(0.3);
          this.cyberGroup.scale.setScalar(0.3);
        } else if (this.activeComponent === 'cloud') {
          this.softwareGroup.scale.setScalar(0.4);
          this.neuralGroup.scale.setScalar(0.4);
          this.cloudGroup.scale.setScalar(1.35);
          this.cyberGroup.scale.setScalar(0.3);
        } else if (this.activeComponent === 'security') {
          this.softwareGroup.scale.setScalar(0.4);
          this.neuralGroup.scale.setScalar(0.4);
          this.cloudGroup.scale.setScalar(0.4);
          this.cyberGroup.scale.setScalar(1.2);
          this.cyberMaterial.opacity = 0.85;
        }
      }

      // Parallax mouse sway
      this.camera.position.x += (targetCamX + this.mouse.x * 1.2 - this.camera.position.x) * 0.06;
      this.camera.position.y += (targetCamY + this.mouse.y * 1.0 - this.camera.position.y) * 0.06;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.06;
      this.camera.lookAt(0, 0, 0);

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  public destroy() {
    this.isDestroyed = true;
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);

    // Deep GPU disposal
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments || obj instanceof THREE.Points) {
        obj.geometry?.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else if (obj.material) {
          obj.material.dispose();
        }
      }
    });

    this.renderer.dispose();
  }
}
