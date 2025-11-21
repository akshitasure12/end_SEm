# World Air Quality Index (AQI) 3D Visualization

This project is a **3D interactive web-based visualization** of global air quality using **HTML, CSS, and JavaScript**. Users can explore AQI levels city-wise on a 3D globe or flat map, with smooth interactions, animations, and color-coded markers.

---

## Visualisations

<img width="1098" height="525" alt="image" src="https://github.com/user-attachments/assets/b3bcd70b-ea58-4267-ae8b-876f770b2859" />

<img width="859" height="547" alt="image" src="https://github.com/user-attachments/assets/d3f7de51-5256-4915-8047-4de2893c5db4" />

<img width="989" height="590" alt="image" src="https://github.com/user-attachments/assets/9b99144a-2532-4625-a336-19ba46df9489" />

## Dataset

The visualization uses the **World Air Quality Index by City and Coordinates** dataset from Kaggle.

### Dataset Columns

| Column Name | Data Type | Description |
|------------|-----------|-------------|
| `City`     | String    | Name of the city |
| `Country`  | String    | Country where the city is located |
| `lat`      | Float     | Latitude coordinate of the city |
| `lon`      | Float     | Longitude coordinate of the city |
| `AQI`      | Integer   | Air Quality Index value (higher = worse air quality) |
| `PM2.5`    | Float     | Particulate Matter 2.5 µm concentration (optional) |
| `PM10`     | Float     | Particulate Matter 10 µm concentration (optional) |

### Example Data

| City       | Country      | lat       | lon       | AQI  | PM2.5 | PM10 |
|------------|-------------|-----------|-----------|------|-------|------|
| London     | UK          | 51.5074   | -0.1278   | 42   | 12.5  | 25   |
| New York   | USA         | 40.7128   | -74.0060  | 55   | 15.2  | 30   |
| Delhi      | India       | 28.7041   | 77.1025   | 210  | 110.5 | 180  |
| Beijing    | China       | 39.9042   | 116.4074  | 190  | 95.3  | 160  |

---

## Features

1. **3D Globe / Map Visualization**  
   - Cities plotted in **3D space** using geographic coordinates.  
   - **Color-coded markers** represent AQI levels (green → low, red → high).  

2. **Interactive Camera & Controls**  
   - Orbit controls allow **rotation, zooming, and panning**.  
   - Users can inspect specific regions dynamically.

3. **Animation**  
   - Smooth rotation of the globe (autorotate).  
   - Optional **animated transitions** when filtering or highlighting cities.

4. **Responsive Design**  
   - Adjusts to different screen sizes.  
   - Supports high-resolution displays with proper scaling.

---

## Computer Graphics Concepts Used

| Concept                   | How Used in Project                                  |
|----------------------------|-----------------------------------------------------|
| 3D Coordinate System       | Mapping lat/lon to 3D Cartesian coordinates on a sphere |
| Transformations            | Translation, rotation, scaling of markers and globe |
| Projection                 | Perspective projection with Three.js `PerspectiveCamera` |
| Lighting & Shading         | Ambient and directional lights, color-coded AQI markers |
| Animation                  | Globe rotation (autorotate) and smooth transitions |
| Interaction                | OrbitControls for rotation, zoom, and panning |
| Rendering Pipeline         | WebGL rasterization, depth testing, and blending |
| Color Mapping              | AQI values mapped to color gradient for visual encoding |

---

## Technologies / Libraries

| Technology / Library | Purpose |
|---------------------|---------|
| HTML5 & CSS3        | Structure and styling of the page |
| JavaScript (ES6)    | Logic, data parsing, and interactions |
| Three.js             | 3D rendering and scene management |
| OrbitControls.js    | Camera manipulation and user input |
| d3.js / PapaParse   | Optional: parsing CSV and color scaling |

---

## How to Run

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aqi-3d-visualization.git
cd aqi-3d-visualization
```
2. For local testing:
```bash
python -m http.server 8000
# Open: http://localhost:8000
```
