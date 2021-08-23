import React from "react";
// import "./popup.css";

function Popup(props) {
  return (
    <div
      style={{
        position: "fixed",
        background: "#00000050",
        width: "100%",
        height: "100vh",
        top: 150,
        left: 0,
        zIndex: 100,
      }}
    >
      <div
        className="box"
        style={{
          position: "relative",
          width: "40%",
          margin: "0 auto",
          height: "0 auto",
          maxHeight: "70vh",
          marginTop: "calc(100vh - 85vh - 20px)",
          background: "#fff",
          borderRadius: "4px",
          padding: "20px",
          border: "1px solid #999",
          overflow: "auto",
        }}
      >
        <span
          className="close-icon"
          style={{
            content: "x",
            cursor: "pointer",

            position: "absolute",
            right: "calc(6% - 30px)",
            top: "10px",
            background: "#ededed",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            lineHeight: "20px",
            textAlign: "center",
            border: "1px solid #999",
            fontSize: " 20px",
          }}
          onClick={props.handleClose}
        >
          x
        </span>
        {props.content}
      </div>
    </div>
  );
}

export default Popup;
