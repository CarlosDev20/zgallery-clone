
# 📱 ZGallery – Prueba Técnica Frontend

Réplica fiel de la pantalla principal de la aplicación **ZGallery**, desarrollada usando **HTML** y **Tailwind CSS**, con enfoque en diseño, estructura semántica y experiencia visual.

---

## 🎯 Objetivo del Proyecto

Este proyecto reproduce la interfaz principal de la galería de fotos de ZGallery, priorizando:

* Fidelidad visual
* Buenas prácticas frontend
* Uso eficiente de Tailwind CSS
* Componentes reutilizables
* Interactividad mínima pero funcional (búsqueda)

La pantalla construida es la **pantalla de galería de carpetas**, la más representativa de la app original.

---

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica y accesible
* **Tailwind CSS (CDN):** Estilos utilitarios con configuración extendida
* **JavaScript:** Funciones básicas (búsqueda, interacciones)
* **Unsplash:** Imágenes temporales para la réplica

---

## 📸 Pantalla Implementada

### ✔ 1. Pantalla Principal de Galería

Incluye:

* Barra de búsqueda con múltiples iconos
* Grid de 5 carpetas
* Overlays (texto, documentos, capas oscuras)
* Indicadores visuales (contadores, bloqueos)
* Botón “View hidden photos”

La interfaz replica estados complejos vistos en la app original.

---

## 💻 Instalación y Uso

### 🔹 Opción 1: Abrir directamente

```bash
# 1. Clona el repositorio
git clone [URL-DEL-REPO]

# 2. Ingresa al proyecto
cd prueba

# 3. Abre index.html en tu navegador
```

### 🔹 Opción 2: Servidor local

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve

# Luego abre: http://localhost:8000
```

---

## 📁 Estructura del Proyecto

```
prueba/
│
├── index.html       # Archivo principal
├── README.md        # Este documento
├── ANALISIS.md      # Análisis técnico del diseño
└── screenshots/     # Capturas comparativas
```

---

## ✨ Características Implementadas

### 🔧 Funcionalidad

* 🔍 Búsqueda en tiempo real
* 🎚 Overlays dinámicos según tipo de carpeta
* 🖱 Microinteracciones (hover, active)
* 📱 Diseño responsive sin media queries adicionales
* 🔒 Indicador de carpeta protegida

### 🎨 Componentes UI

* Barra de búsqueda con iconos
* Grid responsive 2 columnas
* Cards con gradiente inferior
* Overlays de texto/documento
* Ícono de bloqueo en esquina

---

## 🎨 Decisiones de Diseño

### Paleta personalizada de Tailwind

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-card': '#1a1a1a',
        'dark-search': '#2c3e50',
        'text-muted': '#95a5a6'
      }
    }
  }
}
```

### Tipografía

* System fonts para optimizar carga
* Jerarquías entre 12px – 18px según elemento

### Layout

* **Grid 2 columnas**
* **Aspect-ratio 1:1** para uniformidad
* **Gap mínimo** para efecto de collage

---

## 📱 Responsividad

Adaptado automáticamente a:

* Móvil (base)
* Tablet
* Desktop

gracias a utilidades como:

```html
aspect-square
text-base sm:text-lg
grid-cols-2
```

---

## 🧩 Comportamiento del Sistema

* Búsqueda filtra carpetas según texto
* Clics registran el nombre de la carpeta (útil para integrar rutas)
* Imágenes cargadas desde Unsplash (solo demostración)

---

## 🔮 Mejoras Futuras

* Migrar a React o Next.js
* Animaciones entre pantallas
* Añadir pantalla interna de cada carpeta
* Swipe gestures en móvil
* Modo claro/oscuro alternable
* Mejor manejo de estados visuales

---

## 👤 Autor

Proyecto desarrollado como parte de una prueba técnica para prácticas profesionales.

---

## 📄 Licencia

Uso educativo y demostrativo. Las imágenes mostradas provienen de Unsplash y son de libre uso en prototipos.
