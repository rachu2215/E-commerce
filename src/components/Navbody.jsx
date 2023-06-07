import React from "react";

export default function Navbody() {
  return (
    <>
      <div className="navbody">
        <div className="landingText">
          <div className="heading">Click Add Shop</div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            repellendus magni ab eligendi consectetur. Accusamus mollitia
            exercitationem maxime? Ratione adipisci velit porro tempora aliquid
            odio molestias consectetur eum inventore impedit. lor
          </div>
          <div>
            <button>Explore</button>
            <button disabled="disabled">
              <a target="_blank" href="https://www.facebook.com/ra.chu.750">
                About
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="landingImg"></div>
      </div>
    </>
  );
}
