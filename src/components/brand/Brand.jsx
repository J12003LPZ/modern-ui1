import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding" id="brand">
    <div>
      <img
        src={google}
        alt="google"
        className="animate__animated animate__backInLeft"
      />
    </div>
    <div>
      <img src={slack} alt="slack" className="animate__animated animate__backInLeft animate__delay-2s" />
    </div>
    <div>
      <img src={atlassian} alt="atlassian" className="animate__animated animate__backInLeft animate__delay-3s" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox" className="animate__animated animate__backInLeft animate__delay-4s" />
    </div>
    <div>
      <img src={shopify} alt="shopify" className="animate__animated animate__backInLeft animate__delay-5s" />
    </div>
  </div>
);

export default Brand;
