import React, { useState, useEffect, useRef } from "react";
import chatboat from '../../assets/chatboat.png'
import popupimg from "../../assets/Logo robo recruiter 1.gif";

const ChatBoat = () => {
  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone= 9582000035`;
    window.open(url, "_blank");
  };


  return (
    <div>
    <div className="fixed md:bottom-6 bottom-8 md:right-6 right-6 z-10 cursor-pointer"onClick={handleWhatsAppChat} >
            <img src={chatboat} alt="" className="w-16 md:w-20" />
          </div>
    </div>
  );
};

export default ChatBoat;
