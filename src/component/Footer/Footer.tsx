import React, { FC } from "react";

import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="page-footer p-5 bg-black text-white">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="footer-left">
            <h3>Amut.com</h3>
            <p>Support number : (123) 123-22-33</p>
            <br />
            <p>from 08:00 to 20:00 without breaks and weekends</p>
          </div>
          <div className="footer-right"></div>
        </div>
        <div className="mx-auto" style={{ width: "200px" }}>
          <p>© Copy right amut.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
