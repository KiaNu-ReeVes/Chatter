"use client";
import React, { useState } from "react";
// import "./bootstrap.min.css";
import "./style.css";

const Page: React.FC = () => {
  const [activeSelector, setActiveSelector] = useState("Users");
  const message = "Your message content";

  const handleSelectorClick = (selector: string) => {
    setActiveSelector(selector);
  };

  return (
    <div>
      <div className="row selectors">
        <div
          className={`col selectors-s ${
            activeSelector === "Users" ? "selectors-active" : ""
          }`}
          onClick={() => handleSelectorClick("Users")}
        >
          Users
        </div>
        <div
          className={`col selectors-s ${
            activeSelector === "Groups" ? "selectors-active" : ""
          }`}
          onClick={() => handleSelectorClick("Groups")}
        >
          Groups
        </div>
        <div
          className={`col selectors-s ${
            activeSelector === "Channels" ? "selectors-active" : ""
          }`}
          onClick={() => handleSelectorClick("Channels")}
        >
          Channels
        </div>
      </div>
      {/* The rest of your code remains unchanged */}
      <div className="baser">
        {/* User content */}
        <div className="row mainapp text-start">
          <div className="col-2 user">
            <img src="/assets/img/avatar.png" alt="avatar" />
          </div>
          <div className="col-10 user-p">
            <p id="username">KiaN</p>
            <span id="lastpm">Harf Shoma Doroste Vali Ma.......</span>
          </div>
        </div>
        <div className="row mainapp text-start">
          <div className="col-2 user">
            <img src="/assets/img/avatar.png" alt="avatar" />
          </div>
          <div className="col-10 user-p">
            <p id="username">Gofs</p>
            <span id="lastpm">Man Goftam Behet</span>
          </div>
        </div>
        <div className="row mainapp text-start">
          <div className="col-2 user">
            <img src="/assets/img/avatar.png" alt="avatar" />
          </div>
          <div className="col-10 user-p">
            <p id="username">ASDKpo</p>
            <span id="lastpm">Hehe</span>
          </div>
        </div>
        <div className="row mainapp text-start">
          <div className="col-2 user">
            <img src="/assets/img/avatar.png" alt="avatar" />
          </div>
          <div className="col-10 user-p">
            <p id="username">@OSDAJ</p>
            <span id="lastpm">Are</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
