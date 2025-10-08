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
    name: "Cortadora Láser de Fibra CNC 1500W",
    category: "laser-engravers",
    price: 33700,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    description: "Sistema completo de corte láser de fibra 1500x3000mm con fuente de 1500W. Incluye: Cabezal Raytools con auto focus, servomotores, sistema de detección de metal automatizado, Chiller CWFL 3000, secador de aire por refrigeración, compresor a tornillo 20HP con sistema de filtrado de 4 etapas. Corte de metales ferrosos y no ferrosos (acero negro, galvanizado, inoxidable, aluminio, latón, cobre). Software CAM Cypcut incluido. Incluye capacitación e instalación. 12 meses de garantía."
  },
  {
    id: 2,
    name: "Cortadora Láser de Fibra CNC 3000W",
    category: "laser-engravers",
    price: 39900,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    description: "Sistema completo de corte láser de fibra 1500x3000mm con fuente de 3000W. Incluye: Fijación de cabezal tipo pórtico, sistema de transmisión con piñón-cremallera y guías lineales cuadradas, cabezal Raytools con auto focus, accionamiento con servomotores, sistema de detección de metal automatizado, Chiller CWFL 3000, secador de aire, compresor 20HP con pulmón 350L y sistema de filtrado de 4 etapas. Filtros separadores de condensados y micro-filtros de carbón activado. Software CAM Cypcut. Incluye capacitación e instalación. 12 meses de garantía."
  },
  {
    id: 3,
    name: "Cortadora Plasma CNC 50A - Sistema Completo",
    category: "plasma-cutters",
    price: 11900,
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&h=300&fit=crop",
    description: "Mesa Plasma CNC 1500x3000mm + Fuente Plasma 50A con antorcha CNC. Corte y perforación hasta 6mm. Sistema de transmisión piñón-cremallera con guías lineales HGR15. Velocidad máxima 12m/min, precisión 0,1mm. Cabeza de antorcha flotante con sensor Ohmico. THC (control automático de altura) para cortes uniformes. Tecnología IGBT con inicio Blow-Back (sin interferencias). Software MyPlasmaCNC. Corte en acero negro, inoxidable, aluminio, latón, cobre. Incluye capacitación e instalación. 12 meses garantía CNC + 6 meses fuente plasma."
  },
  {
    id: 4,
    name: "Cortadora Plasma CNC 60A - Sistema Completo",
    category: "plasma-cutters",
    price: 12765,
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&h=300&fit=crop",
    description: "Mesa Plasma CNC 1500x3000mm + Fuente Plasma Primeweld 60A con antorcha CNC. Corte y perforación hasta 9mm. Sistema de transmisión piñón-cremallera con guías lineales HGR15. Velocidad máxima 12m/min, precisión 0,1mm. Cabeza de antorcha flotante con sensor Ohmico. THC (control automático de altura) para alargar vida útil de consumibles. Tecnología IGBT con inicio Blow-Back (elimina interferencias HF). Software MyPlasmaCNC. Corte en acero negro, inoxidable, aluminio, latón, cobre. Incluye capacitación e instalación. 12 meses garantía CNC + 6 meses fuente plasma."
  },
  {
    id: 5,
    name: "Cortadora Plasma CNC 80A - Sistema Completo",
    category: "plasma-cutters",
    price: 13869,
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&h=300&fit=crop",
    description: "Mesa Plasma CNC 1500x3000mm + Fuente Plasma Everlast 80A con antorcha CNC. Corte y perforación hasta 12mm. Sistema de transmisión piñón-cremallera con guías lineales HGR15. Velocidad máxima 12m/min, precisión 0,1mm. Cabeza de antorcha flotante con sensor Ohmico. THC (control automático de altura) para cortes uniformes y mayor vida útil. Tecnología IGBT con inicio Blow-Back (sin interferencias electromagnéticas). Software MyPlasmaCNC. Corte en acero negro, inoxidable, aluminio, latón, cobre. Incluye capacitación e instalación. 12 meses garantía CNC + 6 meses fuente plasma."
  }
]

const categories = [
  { id: 'all', name: 'Todos los Productos' },
  { id: 'laser-engravers', name: 'Cortadoras Láser de Fibra' },
  { id: 'plasma-cutters', name: 'Cortadoras Plasma CNC' }
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
              <span className="logo-text">MEWIN</span>
              <span className="tagline">Ingeniería</span>
            </div>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#home" className="nav-link">Inicio</a>
              <a href="#products" className="nav-link">Productos</a>
              <a href="#about" className="nav-link">Nosotros</a>
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
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Máquinas CNC
              <br />
              <span className="hero-highlight">Profesionales</span>
            </h1>
            <p className="hero-description">
              Cortadoras láser de fibra y plasma CNC con instalación y capacitación completa. Alta precisión, rapidez y eficiencia para corte de metales. Sistemas completos listos para producir.
            </p>
            <button className="btn btn-primary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Catálogo
            </button>
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
                      <span className="product-price">
                        ${product.price.toLocaleString()}
                      </span>
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

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Soluciones Completas de Corte Láser</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Instalación Completa</h3>
              <p>Instalación integral del sistema de corte CNC incluida. Nos encargamos de todo desde la instalación hasta la calibración.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Capacitación Profesional</h3>
              <p>Capacitación completa para operadores en software CAM Cypcut y operación de la máquina.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">03</div>
              <h3>12 Meses de Garantía</h3>
              <p>Todos los sistemas incluyen garantía completa de 12 meses cubriendo piezas y soporte técnico.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">04</div>
              <h3>Sistema Completo</h3>
              <p>Incluye fuente láser, chiller, compresor de aire, secador, sistema de filtrado y todos los accesorios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Solicitar Cotización</h2>
          <p className="section-subtitle">
            ¿Interesado en nuestras máquinas CNC? Contáctanos para recibir una cotización personalizada
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📞 Teléfono</h3>
                <p>0971 475 204</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>cmeauriob@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>📍 Ubicación</h3>
                <p>Viriato Diaz Perez 359</p>
                <p>San Lorenzo - Paraguay</p>
              </div>
              <div className="contact-item">
                <h3>👤 Contacto</h3>
                <p>Ing. Cesar Meaurio</p>
              </div>
            </div>
            <div className="contact-actions">
              <a
                href="https://wa.me/595971475204?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20para%20las%20máquinas%20CNC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:cmeauriob@gmail.com?subject=Solicitud%20de%20Cotización%20-%20Máquinas%20CNC"
                className="btn btn-secondary btn-large"
              >
                Enviar Email
              </a>
            </div>
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
              <a href="#products">Cortadoras Láser de Fibra</a>
              <a href="#products">Cortadoras Plasma CNC</a>
              <a href="#products">Sistemas Completos</a>
            </div>
            <div className="footer-section">
              <h4>Servicios</h4>
              <a href="#about">Instalación</a>
              <a href="#about">Capacitación</a>
              <a href="#about">Soporte Técnico</a>
              <a href="#about">Garantía 12 Meses</a>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>Ing. Cesar Meaurio</p>
              <p>cmeauriob@gmail.com</p>
              <p>0971 475 204</p>
              <p>Viriato Diaz Perez 359</p>
              <p>San Lorenzo - Paraguay</p>
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
