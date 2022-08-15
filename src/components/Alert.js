import React from "react";

export default function Alert(props) {
  return (
    <>
      <div style={{ height: "60px" }}>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <b>{props.alert}</b>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
}
