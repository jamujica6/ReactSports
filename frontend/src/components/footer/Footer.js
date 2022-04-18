import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid mt-5 containerFooter">
        <div className="card mx-12 containerFooter">
          <div className="row mb-4 ">
            <div className="col-md-4 col-sm-11 col-xs-11">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <Link to="/home">
                  <img
                    className="logoFooter"
                    src={process.env.PUBLIC_URL + `../img/Logo_react_final.png`}
                  />
                  </Link>
                </div>
                <p className="card-text">Sportswear and accessories</p>
                <div className="social mt-2 mb-3">
                <a href="https://es-la.facebook.com/">
                  <img style={{marginLeft:".5rem"}}
                    src={process.env.PUBLIC_URL + `../img/facebook.png`}
                  /></a>
                  <a href="https://www.instagram.com/">
                  <img style={{marginLeft:".5rem"}}
                    src={process.env.PUBLIC_URL + `../img/instagram.png`}
                  /></a>
                  <a href="https://twitter.com/">
                  <img style={{marginLeft:".5rem"}}
                    src={process.env.PUBLIC_URL + `../img/twitter.png`}
                  /></a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading" style={{ color: "#262626" }}>
                CATEGORY
              </h5>
              <ul>
                <Link to="/type/Hoodies" className="linksFooter">
                  <li>Hoddies</li>
                </Link>

                <Link to="/type/Shirts" className="linksFooter">
                  <li>Shirts</li>
                </Link>

                <Link to="/type/Pants" className="linksFooter">
                  <li>Pants</li>
                </Link>
                <Link to="/type/Shoes" className="linksFooter">
                  <li>Shoes</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading" style={{ color: "#262626" }}>
                BRAND
              </h5>
              <ul className="card-text">
                <Link to="/brands/Nike" className="linksFooter">
                  <li>Nike</li>
                </Link>
                <Link to="/brands/Adidas" className="linksFooter">
                  <li>Adidas</li>
                </Link>
                <Link to="/brands/Puma" className="linksFooter">
                  <li>Puma</li>
                </Link>
                <Link to="/brands/New%20Balance" className="linksFooter">
                  <li>New Balance</li>
                </Link>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading" style={{ color: "#262626" }}>
                SPORT
              </h5>
              <ul className="card-text">
                <Link to="/sports/Soccer" className="linksFooter">
                  <li>Soccer</li>
                </Link>
                <Link to="/sports/Basketball" className="linksFooter">
                  <li>Basketball</li>
                </Link>
                <Link to="/sports/Tennis" className="linksFooter">
                  <li>Tennis</li>
                </Link>
                <Link to="/sports/Running" className="linksFooter">
                  <li>Running</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="divider mb-4"> </div>
          <div className="row" style={{ fontSize: 10 }}>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left" style={{fontSize:"0.7rem"}}>
                <p>
                  <i className="fa fa-copyright"></i><img style={{marginRight:".5rem", marginLeft:".5rem"}}
                    src={process.env.PUBLIC_URL + `../img/linkedin.png`}
                  /> 
                  <a href="https://www.linkedin.com/in/alan-ezequiel-torrez-23a462224/" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Torrez Alan
                  </a>
                  - 
                  <a href="https://www.linkedin.com/in/francisco-sabato-9b2945b5/" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Sabato Francisco 
                  </a>
                  - 
                  <a href="https://www.linkedin.com/in/mart%C3%ADn-alejandro-viola-b2710353/" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Viola Martin
                  </a>
                  - 
                  <a href="https://www.linkedin.com/in/renzo-beccari-5a1906178/" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Beccari Renzo 
                  </a>
                  - 
                  <a href="https://www.linkedin.com/in/javier-mujica-aa32291a/" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Mujica Javier
                  </a>
                  - 
                  <a href="https://github.com/Maxirx" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Salas Maximiliano
                  </a>
                  - 
                  <a href="https://www.linkedin.com/in/david-wilson-cruz-004b87237/" style={{marginRight:".5rem", marginLeft:".5rem", color:"#65656b", textDecoration:"none"}}>
                    Cruz David
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-right mr-4 d-flex policy">
                <div style={{fontSize:"0.7rem"}}>Copyright © 2022 All right reserved | Group Five FS026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
