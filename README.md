# 📱 ZGallery – Prueba Técnica Frontend

Este repositorio contiene la réplica fiel de la interfaz de usuario de la aplicación **ZGallery**, desarrollada como parte de la prueba técnica para prácticas profesionales.

El proyecto recrea la experiencia de navegación, visualización de carpetas y lista de archivos utilizando tecnologías frontend modernas.

---

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **Tailwind CSS:** Estilos utilitarios (implementado vía CDN para facilitar la revisión sin instalaciones complejas).
* **JavaScript (Vanilla):** Lógica para navegación entre pantallas y filtrado de búsqueda en tiempo real.
* **Unsplash API:** Fuente de imágenes de alta calidad para los placeholders.

---

## 📸 Pantallas Recreadas

El proyecto incluye dos vistas principales:

1.  **Home (Galería):** Grid de dos columnas con tarjetas inteligentes, overlays de texto y estados de "bloqueo".
2.  **Detalle (Archivos):** Lista vertical de archivos agrupados por fecha (Hoy, Ayer, fechas anteriores), replicando la jerarquía visual de la app real.

> [cite_start]**Nota:** Las capturas de pantalla comparativas (Original vs. Réplica) se encuentran en la carpeta `/screenshots` de este repositorio para su revisión directa. [cite: 36]

---

## 💻 Instrucciones de Ejecución

Al no requerir compilación (build steps) gracias al uso de Tailwind vía CDN, el proyecto es agnóstico al entorno.

### Opción 1: Ejecución Directa (Más rápida)
1.  Descarga o clona este repositorio.
2.  Navega a la carpeta del proyecto.
3.  Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web predeterminado.

### Opción 2: Servidor Local (Recomendada)
Para simular mejor el entorno web y evitar políticas de CORS (aunque no deberían afectar):

```bash
# Si tienes Python instalado:
python -m http.server 8000

# O si usas Node.js/VS Code Live Server:
npx serve