import React, { useEffect, useState } from "react";
import data from "../data.json";

const Inventory = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    setOrderData(data.orders);
  }, []);
  return (
    <div className="orders-container">
      <p className="font8">Recent Orders</p>
      <div className="data-container">
        {orderData.map((item) => (
          <div className="data-sub1">
            <div className="data-sub2">
              <img
                className="data-image"
                src="https://s3-alpha-sig.figma.com/img/7736/87d4/556d4d0fcd2751bdb09090e73a4c6ba1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7JZrPR24ZjWXuMhEBhdoF4mu0V8FmmcBGJt6lFYBeU69Lz9QJiPVzKD3wgDgpmw1AkemOJ9oHVvRTK-q-YzlqOUPQPyX4M0yFkQLcSubmXn52B1vLmg82vW3VDnRFHQz5SnhStQ5rwBykIJ-SX1-07rLTu4RfsxJrhEj3vGqvJmHRPNaDCO3mIKQMDMwHkrnmnkpRgMky40vWR2ICTiTDdxC9XAL3ZVU4aeo1J3aoscNLzegyYA8Lk4wWpFm-yPuUn1yJoArk98ADboroPcMyxuQctmrIn6MmKoN7SRkiuqrt9cl2PQbkxRgjMRTUDPsNdqILZEMuanH6gW-8VGMw__"
                alt="phone"
              />
              <div>
                <p className="font12">{item.product}</p>
                <p className="font11">₦730,000.00 x 1</p>
              </div>
            </div>
            <div>
              <p className="font4" style={{ fontSize: "12px" }}>
                {item.orderDate}
              </p>
              <StatusButton status={item.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusButton = ({ status }) => {
  if (status === "Completed")
    return (
      <div className="data-button1">
        <p style={{ fontSize: "12px" }}>{status}</p>
      </div>
    );
  if (status === "Pending")
    return (
      <div className="data-button2">
        <p style={{ fontSize: "12px" }}>{status}</p>
      </div>
    );
};

export default Inventory;
