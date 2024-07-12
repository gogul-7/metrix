import React, { useEffect, useState } from "react";
import data from "../data.json";

const Customers = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    setCustomerData(data.customers);
  }, []);

  return (
    <div className="orders-container">
      <p className="font8">Your Customers</p>
      <div className="data-container">
        {customerData.map((item) => (
          <div className="data-sub1">
            <div className="data-sub2">
              <img
                className="data-image"
                src="https://s3-alpha-sig.figma.com/img/a682/9123/9adabc1b461893a09975e11abc591d9a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZRa7rHcAN0MWRDLyT9mamilJoaTkveF7mkZMTeSTVSNHnCOnVzml5IElbxNBnJ9H0pvCmCufFsT96WGY6ZZ~KPtwgaIZoxFBro19sqw4ms40jKQiT32AqtNyv3rb7P3HM0ZJmHpJAlX1fQfKVCjMZggOLoR2ATbHHzjL4ambDqvDo3y1G826MNukFdqJNEPtnqZfuoxP6Kwyea1OWIl9Ztnhk1Oo56u7LULRm0bwZAzitmeTXMf2Fc-tlZ01Y19TJDiU3jzQpk2fJe8TBjnbXDjf2qzedvmvkqFy44GsjuJFg-RWgjwpzJsy0PvOsOKsTG8wEr42I8C2SqbJkQNIXw__"
                alt="phone"
              />
              <div>
                <p className="font12">{item.phone}</p>
                <p className="font11">{item.name}</p>
              </div>
            </div>
            <div>
              <p className="font4" style={{ fontSize: "12px", width: "81px" }}>
                Joined On:
              </p>
              <p className="font5" style={{ fontSize: "12px", width: "81px" }}>
                {item.joinDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
