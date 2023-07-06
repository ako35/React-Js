import React from "react";

const InlineStyling = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        borderRadius: "10px",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ textAlign: "center", color: "red" }}>React Fundamentals</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores,
        accusamus ipsa dolorum vel id doloribus provident, quisquam veritatis
        obcaecati, aliquam illum soluta adipisci ullam repellendus? Non repellat
        facilis ipsam!
      </p>
    </div>
  );
};

export default InlineStyling;
