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
    photo: "/AndreaLaffertt.JPEG",
    description: "Estudiante de ingenieria de sistemas, apasionada por la teconologia y nuevos retos .",
    email: "andrea14laffertt@gmail.com",
    phone: "(+591) 72045492 ",
    role: "Developer"
  },
  {
    name: "Daniela Guzman",
    photo: "/DanielaGuzman.JPEG",
    description: "Estudiante de ingenieria de sistemas, apasionada por la teconologia, programacion competitiva.",
    email: "DAGod@gmail.com",
    phone: "(+591) 65141960 ",
    role: "Developer"
  },
  {
    name: "Jesus Imaña",
    photo: "/JesusImana.JPEG",
    description: "Estudiante de ingenieria de sistemas, apasionado por la teconologia, desarrollo web y videojuegos.",
    email: "jedDan@gmail.com",
    phone: "(+591) 78813800",
    role: "Developer"
  },
  {
    name: "Josue Nisthaus",
    photo: "/JosueNisthaus.JPEG",
    description: "Estudiante de ingenieria de sistemas, apasionado por la teconologia, y retos en el desarrollo.",
    email: "joshnisth@gmail.com",
    phone: "(+591) 69705051",
    role: "Developer"
  },
  {
    name: "Ayana Siegle",
    photo: "/AyanaSiegle.JPEG",
    description: "Estudiante de ingenieria de sistemas, apasionada por la teconologia, y desarrollo web",
    email: "Ansc0307@gmail.com",
    phone: "(+591) 62273515",
    role: "Developer"
  },
  {
    name: "Luciana Velasco",
    photo: "/LucianaVelasco.JPEG",
    description: "Estudiante de ingenieria de sistemas, apasionada por la teconologia e inteligencia artifical",
    email: "lucivp22@gmail.com",
    phone: "(+591) 67347039",
    role: "Developer"
  }
];

const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="containerContactos">
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