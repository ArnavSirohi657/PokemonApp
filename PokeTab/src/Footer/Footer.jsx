import "../CSS/Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row justify-content-center">

          {/* About */}
          <div className="col-md-4 mb-3 pe-md-5">
            <h5>About PokéTab</h5>
            <p>
              PokéTab is a fun and interactive Pokémon search app built with ❤️ by Arnav Sirohi.
              It helps you explore Pokémon details instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3 px-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Search</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="col-md-4 mb-3 ps-md-5">
            <h5>Connect</h5>
            <p>Email: <a href="mailto:arnavsirohi@gmail.com" className="text-light text-decoration-none">arnavsirohi@gmail.com</a></p>
            <div>
              <a href="#" className="me-2 text-light"><i className="bi bi-github"></i></a>
              <a href="#" className="me-2 text-light"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <hr className="bg-light" />
        <div className="text-center small">
          <p className="mb-1">Made with ❤️ by Arnav Sirohi</p>
          <p className="mb-0">
            © {new Date().getFullYear()} PokéTab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
