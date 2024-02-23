import React from "react";
import NavBar from "../Components/NavBar";
import BottomFooter from "../Components/BottomFooter";
import "./paymentpage.css";

/*images */
import Qr1 from "../img/eSewaqr.png";
import Qr2 from "../img/imepayQR.png";
import Qr3 from "../img/khaltiQr.png";

function PaymentPage() {
  return (
    <div className="body-container">
      <div className="main-container">
        <NavBar />
        <div className="Heading">
          {" "}
          <h2 className="heading-topic">“Scan Any Qr To Make Payment”</h2>
        </div>

        <div className="QR-Main-Cobtainer">
          <div className="QR-Container-one">
            <div className="back_design"></div>
            <img src={Qr1} className="QR-image" alt=""></img>
          </div>
          <div className="QR-Container-one">
            <div className="back_design"></div>
            <img src={Qr2} className="QR-image" alt=""></img>
          </div>
          <div className="QR-Container-one">
            <div className="back_design"></div>
            <img src={Qr3} className="QR-image" alt=""></img>
          </div>
        </div>
        <p className="information">
          <span className="Note-text">Note!</span>
          <br />
          ! After successful Payment please Click Below Payment Form Button !
          <br />
          To Continue Your Service.{" "}
        </p>
        <center>
          <button className="paymrntForm-btn">Payment Form</button>
        </center>
      </div>
      <BottomFooter />
    </div>
  );
}

export default PaymentPage;
