# World Air Quality Index (AQI) Visualization

This project provides a **Python-based visualization** of global air quality using the **World Air Quality Index by City and Coordinates** dataset. The script is designed to run in **Google Colab** and enables both **global and regional visualizations** of AQI values.

---

## 📂 Dataset

The dataset is sourced from [Kaggle: World Air Quality Index by City and Coordinates](https://www.kaggle.com/datasets/adityaramachandran27/world-air-quality-index-by-city-and-coordinates). It contains:

- **City Name**  
- **Country**  
- **Latitude (`lat`)** and **Longitude (`lon`)**  
- **AQI (Air Quality Index)**  
- Optional: additional columns such as measurements for PM2.5, PM10, etc.

> **Note:** You need to download the CSV manually from Kaggle and upload it to Colab.

---

## ⚡ Features

1. **AQI Distribution Histogram**  
   - Shows the frequency distribution of AQI values across all cities.
   - Highlights areas with poor air quality.

2. **Global AQI Map**  
   - Plots cities on a world map using **geospatial coordinates**.  
   - Color-coded by AQI levels using a heatmap-style color scale.

3. **Region-Specific Map & Analysis**  
   - Focus on a specific geographic region (example: India).  
   - Produces both histogram and map for cities within the region.

4. **Data Inspection**  
   - Prints dataset overview, column names, missing values, and basic statistics.  

---

## 🛠 Technologies / Libraries Used

- **Python 3**  
- **pandas** – data manipulation  
- **geopandas** – geospatial plotting  
- **matplotlib** – static plotting  
- **seaborn** – statistical plots (histograms, KDE)  
- **contextily** – base maps (optional for tiles)  
- **Google Colab** – cloud environment with file upload support  

---

## 🚀 How to Run in Google Colab

1. Open a new [Google Colab](https://colab.research.google.com/) notebook.
2. Copy the provided script into a code cell.
3. Run the cell. When prompted:
   - Click **Choose Files** and upload your downloaded CSV.
4. The script will automatically:
   - Load and inspect the dataset  
   - Display a histogram of AQI values  
   - Show a global map with cities color-coded by AQI  
   - Show a region-specific map (default: India)  

---

## 🗺 How It Works

1. **Data Loading**  
   - The CSV is read using `pandas.read_csv`.
   - Basic inspection shows missing values and data types.

2. **Visualization**  
   - **Histogram**: Using `seaborn.histplot` to visualize AQI distribution.
   - **World Map**:
     - Convert city coordinates to a GeoDataFrame using `geopandas`.
     - Plot using `matplotlib` with a color gradient for AQI levels.
   - **Region Map**:
     - Filter cities within a bounding box (longitude & latitude limits).
     - Plot similar to global map but zoomed in.

3. **Color-Coding**  
   - Low AQI → Better air quality (cool colors).  
   - High AQI → Poor air quality (warm colors).

---

## ✨ Customization

- Change **region bounding box** to focus on any country or city.
- Adjust **colormap** in plots (`cmap="viridis"`, `"coolwarm"`, etc.).
- Increase **marker size** for better visibility.
- Add **interactive maps** using `plotly` or `folium` for advanced visualization.
- Filter by **AQI ranges** or **specific pollutants** if columns exist.

---

## 📌 Notes

- Ensure CSV column names match those expected in the script (`lat`, `lon`, `AQI`).  
- Missing or null values are automatically ignored in visualizations.  
- For persistent storage, you can **mount Google Drive** and read/write CSV files directly.  

---

## 📚 References

- Kaggle Dataset: [World Air Quality Index by City and Coordinates](https://www.kaggle.com/datasets/adityaramachandran27/world-air-quality-index-by-city-and-coordinates)
- GeoPandas Documentation: [https://geopandas.org](https://geopandas.org)
- Seaborn Documentation: [https://seaborn.pydata.org](https://seaborn.pydata.org)

---

## ✅ License

This project is for **educational and research purposes**.  
Dataset usage follows Kaggle’s terms of use.

---

