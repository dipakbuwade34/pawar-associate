
import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const whatsappNumber = "917748950209";

  const properties = [
    {
      id: 1,
      name: "Luxury Family House",
      type: "House",
      location: "Kolar Road, Bhopal",
      price: "₹85 Lakh",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700",
      description: "Explore this residential property at Kolar Road, Bhopal. Contact Pawar Associate for complete details."
    },
    {
      id: 2,
      name: "Premium Residential Plot",
      type: "Plot",
      location: "Ayodhya Bypass, Bhopal",
      price: "₹32 Lakh",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700",
      description: "Explore this residential plot at Ayodhya Bypass, Bhopal. Contact us for availability and more information."
    },
    {
      id: 3,
      name: "Modern 2 BHK Flat",
      type: "Flat",
      location: "MP Nagar, Bhopal",
      price: "₹58 Lakh",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700",
      description: "Explore this flat at MP Nagar, Bhopal. Contact Pawar Associate for property details."
    },
    {
      id: 4,
      name: "Commercial Office",
      type: "Commercial",
      location: "Arera Colony, Bhopal",
      price: "Contact Us",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700",
      description: "Explore this commercial property at Arera Colony, Bhopal. Contact us for pricing and availability."
    }
  ];

  const filtered = properties.filter((p) =>
    (category === "All" || p.type === category) &&
    (p.name + " " + p.location)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getWhatsAppLink = (property) => {
    const message = `Hello Pawar Associate, I am interested in ${property.name} at ${property.location}. Please share more details.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
       <img
       src="/logo.png"
        alt="Pawar Associate Real Estate Bhopal"
       />
       </div>
        

        <nav>
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p>WELCOME TO PAWAR ASSOCIATE</p>

          <h1>
            Find Your Dream<br />
            <span>Property in Bhopal</span>
          </h1>

          <p>
            Find the perfect house, plot, flat and commercial property.
          </p>

          <a href="#properties" className="main-btn">
            Explore Properties →
          </a>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search property or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Properties</option>
          <option value="House">Residential House</option>
          <option value="Plot">Plot / Land</option>
          <option value="Flat">Flat / Apartment</option>
          <option value="Commercial">Commercial Property</option>
        </select>
      </section>

      {/* PROPERTY SECTION */}
      <section className="properties" id="properties">
        <p className="subtitle">OUR PROPERTY COLLECTION</p>
        <h2>Explore Properties</h2>

        <div className="property-grid">
          {filtered.map((p) => (
            <div className="property-card" key={p.id}>
              <img src={p.image} alt={p.name} />

              <div className="property-info">
                <span>{p.type}</span>

                <h3>{p.name}</h3>

                <p>📍 {p.location}</p>

                <h3 className="price">{p.price}</h3>

                <div className="property-actions">
                  <button
                    className="details-btn"
                    onClick={() => setSelectedProperty(p)}
                  >
                    View Details
                  </button>

                  <a
                    href={getWhatsAppLink(p)}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-btn"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p>No properties found. Try another search.</p>
          )}
        </div>
      </section>

      {/* PROPERTY DETAILS POPUP */}
      {selectedProperty && (
        <div
          className="property-modal"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="property-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProperty(null)}
            >
              ×
            </button>

            <img
              src={selectedProperty.image}
              alt={selectedProperty.name}
            />

            <div className="modal-info">
              <span>{selectedProperty.type}</span>

              <h2>{selectedProperty.name}</h2>

              <p>📍 {selectedProperty.location}</p>

              <h3>{selectedProperty.price}</h3>

              <p>{selectedProperty.description}</p>

              <a
                href={getWhatsAppLink(selectedProperty)}
                target="_blank"
                rel="noreferrer"
                className="contact-btn"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <p className="subtitle">WHO WE ARE</p>

        <h2>About Pawar Associate</h2>

        <p>
          Your trusted property dealing partner in Bhopal.
          We help you explore residential, commercial and land opportunities.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <h2>Looking For Your Dream Property?</h2>

        <p>Contact Pawar Associate today.</p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Pawar Associate, I want to know more about your properties.")}`}
          target="_blank"
          rel="noreferrer"
        >
          Contact Us on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>PAWAR ASSOCIATE</h3>

        <p>Real Estate • Bhopal, Madhya Pradesh</p>

        <p>WhatsApp: +91 7748950209</p>

        <small>© 2026 Pawar Associate. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
