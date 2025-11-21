// === Scene setup ===
const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 12;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.04;

// Auto-rotation state
let autoRotate = true;
controls.addEventListener("start", () => { autoRotate = false; });
controls.addEventListener("end", () => { autoRotate = true; });

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.45));
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Globe
const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
const globeMaterial = new THREE.MeshPhongMaterial({
  color: 0x003355,
  transparent: true,
  opacity: 0.9
});
const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

// === Load Data ===
fetch("data/air_quality.csv")
  .then(response => response.text())
  .then(text => {
    const rows = text.split("\n").slice(1);

    rows.forEach(row => {
      const cols = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);

      const aqi = parseFloat(cols[2]);
      const lat = parseFloat(cols[12]);
      const lng = parseFloat(cols[13]);

      if (isNaN(lat) || isNaN(lng) || isNaN(aqi)) return;

      const r = 5;
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      const barHeight = (aqi / 300) * 1.2;
      const t = Math.min(aqi / 300, 1);
      const color = new THREE.Color(t, 1 - t, 0);

      const barGeometry = new THREE.BoxGeometry(0.08, barHeight, 0.08);
      const barMaterial = new THREE.MeshPhongMaterial({ color });
      const bar = new THREE.Mesh(barGeometry, barMaterial);

      bar.position.set(x, y, z);
      bar.lookAt(0, 0, 0);
      bar.translateY(barHeight / 2);
      scene.add(bar);
    });
  });

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  if (autoRotate) {
    globe.rotation.y += 0.002; 
  }

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Responsiveness
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
