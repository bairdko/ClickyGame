import React from 'react';

const footerStyle = {
  borderTop: "solid 2px #dc3545",
  padding: "20px 0"
}

const linkStyle = {
  color: "#f8f9fa",
  textDecoration: "none"
}

const Footer = () => (
  <div className = "footer bg-info text-center" style = {footerStyle}>
    <small><a href = "https://github.com/bairdko/ClickyGame" style = {linkStyle}>View GitHub Repo</a></small>
  </div>
);

export default Footer;
