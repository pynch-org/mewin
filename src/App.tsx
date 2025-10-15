import { useState, useMemo } from 'react'
import './App.css'

// Product type definition
interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

// Datos de productos
const products: Product[] = [
  {
    id: 1,
    name: "MEWIN Cortadora Laser de Fibra ML 1530",
    category: "cortadora-laser",
    price: 33700,
    image: "/images/cnc-1530.png",
    description: "Tecnología, potencia y precisión para cortes en metales. Su estructura reforzada, cabezal automático y software inteligente la convierten en la elección ideal para fabricación metálica, cartelería y producción en serie.\n\nEspecificaciones principales:\n• Área de trabajo: 1500 x 3000 mm\n• Potencias disponibles: 1500W / 2000W / 3000W\n• Cabezal: Raytools con autoenfoque"
  },
  {
    id: 2,
    name: "MEWIN Cortadora Plasma CNC MP1530",
    category: "cortadora-plasma",
    price: 11900,
    image: "/images/plasma-1530.png",
    description: "Potencia, Precisión y Rendimiento para tus cortes. Diseñada para trabajo continuo, combina robustez, tecnología moderna y un sistema de control preciso para lograr resultados profesionales a bajo costo operativo.\n\nEspecificaciones principales:\n• Área de trabajo: 1500 x 3000 mm\n• Cabezal: antorcha flotante con sensor óhmico\n• Control de altura THC: automático"
  },
  {
    id: 3,
    name: "MEWIN Grabador Láser de Fibra",
    category: "grabadora-laser",
    price: 8500,
    image: "/images/grabador-laser.png",
    description: "Precisión y Personalización Profesional en Cada Grabado.\nEl Grabador Láser de Fibra MEWIN es la herramienta perfecta para personalizar y marcar productos metálicos y no metálicos con máxima definición.\n\nEspecificaciones principales:\n• Área de grabado: hasta 300 x 300 mm\n• Potencias: 30W/50W\n• Fuente láser: RAYCUS (>50.000 h de vida útil)\n• Precisión: 0,01 mm\n• Accesorio rotativo: incluido (para termos, vasos, anillos, etc.)\n• Materiales: acero inoxidable, aluminio, cobre, bronce, plata, oro, cerámica, plásticos, cuero\n• Software: Ezcad2 / LightBurn"
  }
]

const categories = [
  { id: 'all', name: 'Todos los Productos' },
  { id: 'cortadora-laser', name: 'Cortadora Láser' },
  { id: 'cortadora-plasma', name: 'Cortadora Plasma' },
  { id: 'grabadora-laser', name: 'Grabadora Láser' }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="app">
      {/* Header / Navigation */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/images/logo.png" alt="MEWIN Ingeniería" className="logo-image" />
            </div>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#home" className="nav-link">Inicio</a>
              <a href="#products" className="nav-link">Productos</a>
              <a href="#services" className="nav-link">Servicios</a>
              <a href="#contact" className="nav-link">Contacto</a>
            </nav>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-catalog" id="home">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Expertos en maquinas
            </h1>
            <h2 className="hero-highlight">CNC</h2>
            <div className="hero-actions">
              <a
                href="https://wa.me/595982849996?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20las%20máquinas%20CNC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Soluciones Completas de Corte Láser</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Instalación Completa</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Capacitación Profesional</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">03</div>
              <h3>12 Meses de Garantía</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section" id="products">
        <div className="container">
          <div className="catalog-header">
            <h2 className="section-title">Nuestros Productos</h2>

            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <a href="#contact" className="btn btn-primary btn-small">
                        Solicitar Cotización
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No se encontraron productos que coincidan con tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section" id="services">
        <div className="container">
          <h2 className="section-title">Servicio de corte con LASER</h2>
          <p className="section-subtitle">
            Ofrecemos servicios profesionales de corte láser personalizado
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/arte-decorativo.png" alt="Arte decorativo" />
              </div>
              <h3>Arte decorativo</h3>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/fabricacion-piezas.png" alt="Fabricación de piezas" />
              </div>
              <h3>Fabricación de piezas</h3>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop" alt="Cartelería" />
              </div>
              <h3>Cartelería</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-actions">
            <a
              href="https://wa.me/595982849996?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20para%20las%20máquinas%20CNC"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-large"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="mailto:ingenieria@mewin.com?subject=Solicitud%20de%20Cotización%20-%20Máquinas%20CNC"
              className="btn btn-secondary btn-large"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>MEWIN INGENIERÍA</h4>
              <p>Sistemas profesionales de corte láser de fibra CNC. Instalación completa, capacitación y garantía de 12 meses incluidos con cada máquina.</p>
            </div>
            <div className="footer-section">
              <h4>Productos</h4>
              <a href="#products">Cortadora Láser de Fibra</a>
              <a href="#products">Cortadoras Plasma CNC</a>
              <a href="#products">Grabador Láser</a>
            </div>
            <div className="footer-section">
              <h4>Servicios</h4>
              <a href="#services">Corte Láser</a>
              <a href="#contact">Capacitación</a>
              <a href="#contact">Soporte Técnico</a>
              <a href="#contact">Garantía 12 Meses</a>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <a href="https://www.mewin.com.py" target="_blank" rel="noopener noreferrer">www.mewin.com.py</a>
              <a href="https://www.mewiningenieria.com" target="_blank" rel="noopener noreferrer">www.mewiningenieria.com</a>
              <p>ingenieria@mewin.com</p>
              <p>(0982) 849-996</p>
              <p>Tte. Maschio, San Lorenzo 111449</p>
              <p>Paraguay</p>
              <a
                href="https://maps.app.goo.gl/S1EpdDM1yJi48pqw6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                📍 Ver en Google Maps
              </a>
            </div>
            <div className="footer-section footer-map">
              <h4>Ubicación</h4>
              <div className="map-container-footer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0!2d-57.509!3d-25.338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzE2LjgiUyA1N8KwMzAnMzIuNCJX!5e0!3m2!1ses!2spy!4v1709123456789!5m2!1ses!2spy"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación MEWIN Ingeniería - Tte. Maschio, San Lorenzo"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 MEWIN Ingeniería. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
