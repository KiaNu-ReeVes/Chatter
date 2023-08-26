"use client";
import React, { useState } from "react";
import "./bootstrap.min.css";
import "./style.css";

const Chat: React.FC = () => {
  const [activeSelector, setActiveSelector] = useState("Users");
  const message = "Your message content";

  const handleSelectorClick = (selector: string) => {
    setActiveSelector(selector);
  };

  return (
    <div>
      <div className="baser">
        {/* Chat content */}
        <div className="row chatapp text-start">
          <div className="chat-content-rightside">
            <div className="d-flex">
              <img
                src="/assets/img/avatar.png"
                width="48"
                height="48"
                className="rounded-circle p-1"
                alt="توضیح تصویر"
              />
              <div className="flex-grow-1 me-2">
                <p className="chat-right-msg">{message}</p>
              </div>
            </div>
          </div>
          <div className="chat-content-leftside">
            <div className="d-flex">
              <div className="flex-grow-1 ms-2">
                <p className="chat-left-msg">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
