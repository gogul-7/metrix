import React, { useContext, useState } from "react";
import "./AddImage.css";
import { motion, AnimatePresence } from "framer-motion";
import { Delete, Image } from "react-iconly";
import upload from "../assets/upload.png";
import AppContext from "../store/AppContext";
import uploadBlack from "../assets/upload_black.png";

export const AddImage = () => {
  const { setBackDrop, backDrop } = useContext(AppContext);
  const [image, setImage] = useState(false);

  const fnupload = () => {
    setBackDrop(false);
    setImage(false);
  };

  return (
    <AnimatePresence>
      {backDrop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="backdrop"
          onClick={() => setBackDrop(false)}
        >
          {image ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="add-image-content-container"
              style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            >
              <img
                width={230}
                src="https://s3-alpha-sig.figma.com/img/20aa/946c/15db665e92415b05e4006334e9683bef?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kF~wODH70Dyi6r9n~BQq9E6zQpR1ehkIx3z1O-t~G-4fs8RYx8-c-5BCjTeVXs8fQX8nrHdDGy9YTW8NgtmsII1d-bCcUPWuiqCZPsuRhId66pwI3gsal0d0gUx-LL-Cee3gcqMCl3OdJHoHB~p~MFOCR6GxmbKCMLwJmCveVrnB1Hj7XYMaLCL8OuiDaB7WOiek9~wrnex4IIRlpelFJrco20xhP59SeRefC-AXxSz9JK3FaxDMgwlNRwJFmrS4SAiXgkekRsGhWfutRKFWGCaxA79i5Mp5FSEuUTLTB~QrkzklnDWkH4R6o6-rTOEQh2477luZtb6ksrEXtVGFcQ__"
                alt="dress"
              />
              <div className="image-sub2">
                <div className="image-sub3" onClick={fnupload}>
                  <img src={uploadBlack} width={20} />
                </div>
                <div className="image-sub3" onClick={() => setImage(false)}>
                  <Delete set="light" size={20} />
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={(e) => e.stopPropagation()}
              className="add-image-container"
            >
              <div className="add-image-content-container">
                <Image
                  set="bulk"
                  primaryColor="rgba(85, 112, 241, 1)"
                  size={56}
                />
                <div className="image-sub1" onClick={() => setImage(true)}>
                  <img src={upload} width={20} />
                  <p className="font10">Upload Image</p>
                </div>
                <p
                  className="font4"
                  style={{ textAlign: "center", width: "91%" }}
                >
                  Upload a cover image for your product. File Format
                  <span style={{ color: "black" }}> jpeg, png </span>
                  Recommened Size{" "}
                  <span style={{ color: "black" }}>600x600 (1:1)</span>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
