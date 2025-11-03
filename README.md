# MEWIN Ingenieria

Sitio web corporativo para MEWIN Ingenieria, especialistas en maquinas CNC (cortadoras laser, cortadoras plasma y grabadoras laser).

## 📋 Tabla de Contenidos

- [Como Agregar Nuevos Productos](#como-agregar-nuevos-productos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Como Agregar Imagenes](#como-agregar-imagenes)
- [Como Agregar Videos](#como-agregar-videos)
- [Desarrollo Local](#desarrollo-local)

---

## Como Agregar Nuevos Productos

### Paso 1: Preparar las Imagenes del Producto

1. Coloca las imagenes del producto en la carpeta correspondiente:
   - Cortadoras Laser: `public/images/products/laser-cutter/`
   - Cortadoras Plasma: `public/images/products/plasma/`
   - Grabadoras Laser: `public/images/products/engraver/`

2. **Importante:** Solo las primeras 3 imagenes apareceran en el carrusel del producto. Las demas imagenes se mostraran en la seccion "Nuestros Productos en Accion" al final de la pagina.

### Paso 2: Agregar el Producto en el Codigo

Abre el archivo `src/App.tsx` y busca el array `products` (alrededor de la linea 17).

Agrega un nuevo objeto al array siguiendo esta estructura:

```typescript
{
  id: 4,  // Numero unico, incrementa del ultimo producto
  name: "MEWIN Nombre del Producto",
  category: "cortadora-laser",  // Opciones: "cortadora-laser", "cortadora-plasma", "grabadora-laser"
  price: 0,  // Precio (opcional, no se muestra actualmente)
  image: "/images/tu-imagen-principal.png",  // Imagen principal
  images: [
    "/images/tu-imagen-principal.png",
    "/images/products/categoria/imagen-2.jpg",
    "/images/products/categoria/imagen-3.jpg"
    // Solo incluye 3 imagenes aqui para el carrusel
  ],
  description: "Descripcion completa del producto.\n\nEspecificaciones principales:\n• Caracteristica 1\n• Caracteristica 2\n• Caracteristica 3"
}
```

### Ejemplo Completo:

```typescript
const products: Product[] = [
  // ... productos existentes ...
  {
    id: 4,
    name: "MEWIN Cortadora Router CNC",
    category: "cortadora-laser",
    price: 15000,
    image: "/images/router-cnc.png",
    images: [
      "/images/router-cnc.png",
      "/images/products/laser-cutter/router-1.jpg",
      "/images/products/laser-cutter/router-2.jpg"
    ],
    description: "Router CNC de alta precision para trabajo en madera, acrilico y aluminio.\n\nEspecificaciones principales:\n• Area de trabajo: 1200 x 2400 mm\n• Potencia del motor: 3.5 kW\n• Velocidad de corte: hasta 18000 mm/min"
  }
]
```

### Paso 3: Agregar Imagenes Adicionales a la Galeria

Si tu producto tiene mas de 3 imagenes, agregalas a la seccion "Nuestros Productos en Accion":

1. Abre el archivo `src/App.tsx`
2. Busca la seccion `{/* YouTube Videos and Images Gallery Section */}` (alrededor de la linea 247)
3. Agrega nuevos contenedores de imagenes:

```tsx
<div className="video-container">
  <img src="/images/products/categoria/tu-imagen-4.jpg" alt="MEWIN Producto" />
</div>
```

---

## Estructura del Proyecto

```
mewin/
├── public/
│   ├── images/
│   │   ├── logo.png                    # Logo principal (header/footer)
│   │   ├── hero-logo.png              # Logo del hero (NO SE USA en mobile)
│   │   ├── hero-fallback.png          # Imagen de fondo para mobile
│   │   ├── products/
│   │   │   ├── laser-cutter/          # Imagenes de cortadoras laser
│   │   │   ├── plasma/                # Imagenes de cortadoras plasma
│   │   │   └── engraver/              # Imagenes de grabadoras
│   │   ├── arte-decorativo.png
│   │   ├── fabricacion-piezas.png
│   │   └── carteleria.jpg
│   └── videos/
│       └── hero-background.mp4        # Video del hero (desktop)
├── src/
│   ├── App.tsx                        # Componente principal con productos
│   ├── App.css                        # Estilos principales
│   ├── components/
│   │   └── ImageGallery.tsx           # Carrusel de imagenes
│   └── main.tsx
└── README.md
```

---

## Como Agregar Imagenes

### Imagenes de Productos

1. **Formato recomendado:** PNG o JPG
2. **Tamaño recomendado:** 800x800px o mayor (mantener aspecto cuadrado)
3. **Peso:** Optimizar para web (maximo 500KB por imagen)

### Ubicaciones:

- **Logo principal:** `public/images/logo.png` (formato PNG con fondo transparente)
- **Logo del hero:** `public/images/hero-logo.png` (se oculta en mobile)
- **Imagen de fondo mobile:** `public/images/hero-fallback.png`
- **Productos:** `public/images/products/[categoria]/[nombre-imagen].jpg`

### Reemplazar Imagenes Existentes:

Simplemente reemplaza el archivo en la ubicacion correspondiente manteniendo el mismo nombre.

---

## 🎥 Como Agregar Videos

### Videos de YouTube

1. Abre `src/App.tsx`
2. Busca la seccion `{/* YouTube Videos and Images Gallery Section */}` (linea 247)
3. Agrega un nuevo iframe con tu video:

```tsx
<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/TU_ID_DE_VIDEO"
    title="MEWIN - Descripcion"
    style={{ border: 0 }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

**Nota:** Para obtener el ID del video de YouTube:
- URL completa: `https://www.youtube.com/watch?v=EMcvC33GYDI`
- ID del video: `EMcvC33GYDI`
- URL para embed: `https://www.youtube.com/embed/EMcvC33GYDI`

---

## Desarrollo Local

### Requisitos

- Node.js 18 o superior
- npm o yarn

### Instalacion

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para produccion
npm run build

# Vista previa de la compilacion
npm run preview
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo en http://localhost:5173
- `npm run build` - Compila el proyecto para produccion
- `npm run preview` - Vista previa de la compilacion de produccion
- `npm run lint` - Ejecuta el linter para verificar el codigo

---

## Personalizacion de Estilos

Los estilos principales se encuentran en `src/App.css`. Algunas variables importantes:

```css
:root {
  --primary-blue: rgb(67, 83, 255);        /* Color principal (CNC) */
  --primary-blue-hover: rgb(47, 63, 235);  /* Color hover */
  --dark-bg: #0a0a0a;                      /* Fondo oscuro */
  --dark-gray: #1a1a1a;                    /* Gris oscuro */
  --medium-gray: #2a2a2a;                  /* Gris medio */
}
```

---

## 📱 Responsive Design

El sitio esta optimizado para:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (< 768px)

En mobile:
- El video del hero se reemplaza por una imagen estatica
- El logo del hero se oculta para ahorrar espacio
- Los espaciados se reducen automaticamente
- El menu de navegacion se convierte en hamburguesa


---

## Notas

1. **Imagenes del carrusel:** Solo 3 imagenes por producto en el carrusel
2. **Imagenes adicionales:** Se muestran en la galeria "Nuestros Productos en Accion"
3. **Categorias:** Deben coincidir exactamente: `cortadora-laser`, `cortadora-plasma`, o `grabadora-laser`
4. **Descripciones:** Usar `\n\n` para saltos de linea y `•` para viñetas
5. **Logos:** El logo principal debe tener fondo transparente (PNG)

