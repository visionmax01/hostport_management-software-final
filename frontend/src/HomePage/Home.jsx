import React from "react";
import packageimg1 from "../img/logo2.png";
import eap110 from "../img/eap110.webp";
import img1 from "../img/eap110.webp";
import img3 from "../img/myphoto.jpg";
import img2 from "../img/slider4.jpg";
import image from "../img/image.jpg";
import hologram from "../img/hologram-img.png";
import NavBar from "../Components/NavBar";
import BottomFooter from "../Components/BottomFooter";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n - 1);
  };

  const showSlides = (index) => {
    let newIndex = index;
    if (index >= slides.length) {
      newIndex = 0;
    } else if (index < 0) {
      newIndex = slides.length - 1;
    }

    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = i === slideIndex ? "block" : "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = i === slideIndex ? "dot active" : "dot";
  }

  return (
    <div>
      <NavBar />
      {/* section1-phase of main page */}
      <div className="home-main-section1">
        <div className="left_part">
          <div className="name-highlight">
            <h1>
              <span className="welcome">"Welcome </span>
              <span className="welcome-To">TO,</span>
              <br />
              <span className="straight-line">
                <span className="Name-latera">A</span>
                <span className="Name-laterb">V</span>&nbsp;
                <span className="network">
                  <p>NETWORK"</p> 
                </span>
              </span>
            
            </h1>
          </div>
          <div className="offer"></div>
          <div className="join-btn">
            <p>
              {" "}
              Click <span className="book-link">Book Now</span> To, Connect With
              our Wi-Fi
              <br />
              <span className="middle-text">
                To Explore Internet World.
              </span>{" "}
              <br />
              with Wireless Network{" "}
              <span className="make-red">available in Limited Areas.</span>
            </p>
          </div>
          <button className="btn-join btn-primary btn- small">Book Now</button>
        </div>

        {/* section2-phase of main page */}
        <div className="right_part">
          <div className="background-container">
            <div className="image-scroller">
              <div class="slideshow-container">
                <div class="mySlides fade-out">
                  <img className="image-scroller1" src={img1} alt="" />
                </div>

                <div class="mySlides fade-out">
                  <img className="image-scroller1" src={img3} alt="" />
                </div>

                <div class="mySlides fade-out">
                  <img className="image-scroller1" src={img2} alt="" />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="dot-container">
          <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      </div>
      <div className="home-main-section2">
        <div className="Package-title"> New Year Package</div>
        <div className="package-card-container">
          <div className="package-card-left">
            <img className="card-image" src={packageimg1} alt="" />
            <h1 className="heading-containt">STANDARD</h1>
            <div className="package-detail">
              <span className="details">
                Speed -<b>1Mbps</b>{" "}
              </span>
              <br />
              <span className="details">
                Amount - <b className="Price-detail">Rs.300</b>
              </span>
              <br />
              <span className="details">
                Bandwidth - <b>25GB</b>
              </span>
              <br />
              <span className="details">
                Duration - <b>1_Month</b>
              </span>
              <br />
            </div>

            <button className="btn-join-small"> Join Now</button>
          </div>

          <div className="package-card-left">
            <img className="card-image" src={packageimg1} alt="" />
            <h1 className="heading-containt">Lite Pack</h1>
            <div className="package-detail">
              <span className="details">
                Speed - <b>1.5Mbps</b>
              </span>
              <br />
              <span className="details">
                Amount -<b className="Price-detail"> Rs.1000</b>
              </span>
              <br />
              <span className="details">
                Bandwidth - <b>unlimited</b>
              </span>
              <br />
              <span className="details">
                Duration - <b>3_Month</b>
              </span>
              <br />
            </div>
            <button className="btn-join-small"> Join Now</button>
          </div>

          <div className="package-card-right">
            <div className="card-containt">
              <img className="card-image" src={packageimg1} alt="" />
              <h1 className="heading-containt">Premium</h1>
              <div className="package-detail">
                <span className="details">
                  Speed - <b>2Mbps</b>
                </span>
                <br />
                <span className="details">
                  Amount - <b className="Price-detail">Rs.1800</b>
                </span>
                <br />
                <span className="details">
                  Bandwidth - <b>unlimited</b>
                </span>
                <br />
                <span className="details">
                  Duration -<b>6_Month</b>
                </span>
                <br />
              </div>
              <button className="btn-join-small"> Join Now</button>
            </div>
            <div className="class-offer">
              <spam>
                +1 Month <br /> Free
              </spam>
            </div>
          </div>

          <div className="package-card-right">
            <div className="card-containt">
              <img className="card-image" src={packageimg1} alt="" />
              <h1 className="heading-containt">Ultra Premium</h1>
              <div className="package-detail">
                <span className="details">
                  Speed - <b>2.5Mbps</b>
                </span>
                <br />
                <span className="details">
                  Amount - <b className="Price-detail">Rs.4000</b>
                </span>
                <br />
                <span className="details">
                  Bandwidth - <b>unlimited</b>
                </span>
                <br />
                <span className="details">
                  Duration - <b>12_Month</b>
                </span>
                <br />
              </div>
              <button className="btn-join-small"> Join Now</button>
            </div>
            <div className="class-offer">
              <p>
                +2 Month <br /> Free
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section3-phase of main page */}
      <div className="home-main-section3">
        <div className="left-side1">
          <h1 className="text-top">
            Direct Connect To your <br />
            Smart Devices
          </h1>
          <h2 className="top-text1">2.4 Gh / 5 Gh</h2>
          <img className="card-image-left" src={hologram} alt="" />
        </div>
        <div className="left-side2">
          <img src={packageimg1} className="left-side-img" alt=""></img>
        </div>
      </div>

      <div className="home-main-section4">
        <div className="img-side1">
          <img src={eap110} className="left-side-img1" alt="" />
        </div>

        <div className="img-side2">
          <img src={image} className="right-side-img2" alt="" />
        </div>
      </div>
      <BottomFooter />
    </div>
  );
}
export default Home;
