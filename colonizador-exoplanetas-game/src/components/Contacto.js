import React from 'react';
import './Contacto.css';

const ContactCard = ({ name, photo, description, email, phone, role }) => (
  <div className="contact-card">
    <div className="card-header">
      <div className="card-overlay"></div>
      <img src={photo} alt={name} className="card-image" />
      <div className="avatar-container">
        <img src={photo} alt={name} className="avatar" />
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{name}</h3>
      <span className="role-badge">{role}</span>
      <p className="description">{description}</p>
      <div className="contact-info">
        <a href={`mailto:${email}`} className="contact-link">
          <span className="icon">✉️</span>
          <span>{email}</span>
        </a>
        <a href={`tel:${phone}`} className="contact-link">
          <span className="icon">📞</span>
          <span>{phone}</span>
        </a>
      </div>
    </div>
  </div>
);

const teamMembers = [
  {
    name: "Andrea Fernandez",
    photo: "/Defeat.png",
    description: "Desarrolladora Frontend con 5 años de experiencia en React y un enfoque en crear interfaces de usuario intuitivas y accesibles.",
    email: "ana@ejemplo.com",
    phone: "+1234567890",
    role: "Developer"
  },
  {
    name: "Daniela Guzman",
    photo: "/Defeat.png",
    description: "Ingeniero de Backend especializado en arquitecturas escalables y microservicios con Go y Python.",
    email: "carlos@ejemplo.com",
    phone: "+1234567891",
    role: "Developer"
  },
  {
    name: "Jesus Imañaz",
    photo: "/Defeat.png",
    description: "Diseñadora UX/UI apasionada por crear experiencias de usuario fluidas y atractivas.",
    email: "sofia@ejemplo.com",
    phone: "+1234567892",
    role: "Developer"
  },
  {
    name: "Josue Nisthaus",
    photo: "/Defeat.png",
    description: "Diseñadora UX/UI apasionada por crear experiencias de usuario fluidas y atractivas.",
    email: "sofia@ejemplo.com",
    phone: "+1234567892",
    role: "Developer"
  },
  {
    name: "Ayana Siegle",
    photo: "/Defeat.png",
    description: "Diseñadora UX/UI apasionada por crear experiencias de usuario fluidas y atractivas.",
    email: "sofia@ejemplo.com",
    phone: "+1234567892",
    role: "Developer"
  },
  {
    name: "Luciana Velasco",
    photo: "/Defeat.png",
    description: "Diseñadora UX/UI apasionada por crear experiencias de usuario fluidas y atractivas.",
    email: "sofia@ejemplo.com",
    phone: "+1234567892",
    role: "Developer"
  }
];

const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="page-title">Nuestro Equipo</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <ContactCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacto;