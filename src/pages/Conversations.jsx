import React, { useEffect, useState } from "react";
import data from "../data.json";

const Conversations = () => {
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    setMessageData(data.conversations);
  }, []);
  return (
    <div className="orders-container">
      <p className="font8">Messages</p>
      <div className="data-container">
        {messageData.map((item) => (
          <div className="data-sub1-message">
            <div className="data-sub2">
              <img
                className="data-image2"
                src="https://s3-alpha-sig.figma.com/img/3442/044f/d84b20fb592f139a12ce6fb7a86b7c6a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTUmNME528fhv5yoMhgEzUZZbqoCINmiepgQ6LE-34nMbG0tZWd9aawVFrFG-U4tyWCU5u594DItPgg3QZaZ0~VoTCFfKKN0z2HgQ3Vcq5pyPSTXKlrISDhP9s6hp~Yp1eywoxaKhejAJiKaKmV-AbIXQvx0BfwlToDdOQM0wjnziM1tO4Oz~~XxWqY0nAe8bxjbVvlcr11cmoV5e2-woO6anEcS613anjyAIKkNjdzbKQRwLrZHOQi7mk4S1tEcbPBSCLVJZsuF-NAufjnOtDY4a56iekAbx77CKaNKMI6k4DiQ~K9ZPe~1f16Zm4SpkbHVTvOljkvcWl9antS0tw__"
                alt="phone"
              />
              <div>
                <p
                  className="font12"
                  style={{ marginTop: "5px", marginBottom: "-2px" }}
                >
                  {item.customerName}
                </p>
                <p
                  className="font12"
                  style={{ color: "rgba(139, 141, 151, 1)", marginTop: "5px" }}
                >
                  {item.message[0].slice(0, 30) + "..."}
                </p>
              </div>
            </div>
            <div>
              <div className="data-sub3">
                <div className="data-new">
                  <p style={{ fontSize: "12px" }}>New</p>
                </div>
                {item.message.length > 1 && (
                  <div className="data-num">
                    <p style={{ fontSize: "12px" }}>{item.message.length}</p>
                  </div>
                )}
              </div>
              <p
                className="font4"
                style={{ fontSize: "12px", width: "81px", marginTop: "13px" }}
              >
                {item.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversations;
