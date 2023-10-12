"use client";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../styles/bootstapmobilenav.css";
export default function Bootmobile() {
  const [showAnimated, setShowAnimated] = useState(false);
  // const [showAnimated2, setShowAnimated2] = useState(false);
  // const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    <>
      <section className="mb-3 section1">
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type="button"
              className="first-button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated}>
          <div className="bg-light shadow-3 p-4">
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 1
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 2
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 3
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}
