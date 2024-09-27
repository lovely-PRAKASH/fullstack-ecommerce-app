import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div md={4} className="mb-3 col">
            <h5 className="text-uppercase mb-4">Trending Now</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Latest Trends</a></li>
              <li><a href="/" className="text-white">Best Sellers</a></li>
              <li><a href="/" className="text-white">Upcoming Releases</a></li>
              <li><a href="/" className="text-white">Exclusive Offers</a></li>
            </ul>
          </div>
          <div md={4} className="mb-3 text-center">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <div className="d-flex justify-content-center icons">
              <a href="https://www.facebook.com" className="text-white mx-2">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" className="text-white mx-2">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
          <div md={4} className="mb-3">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="text-white">Email: support@example.com</li>
              <li className="text-white">Phone: +123 456 7890</li>
              <li className="text-white">Address: 123, Main Street, City</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <div>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
