import React from "react";

function NavBar() {
  return (
    <div>
      <header className="HeaderContainer">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light rounded"
          aria-label="Twelfth navbar example"
        >
          <div className="container-fluid">
            {/* TODO: Diseñar el Logo de la marca */}
            <a href="#" className="App">
              <img
                className="LogoHeader"
                src="https://cdn.almundo.com/statics/img/header/logos/logo_almundo_DK.svg"
                alt=""
              />
            </a>

            <div
              className="navbar-collapse justify-content-md-center"
              id="navbarsExample10"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Flights
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Lodges
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a href="#">
              <button className="btn btn-secondary">Sign In</button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
