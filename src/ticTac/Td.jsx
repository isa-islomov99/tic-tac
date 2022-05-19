import React from "react";

const Td = ({ handleClick, num, cells }) => {
  const style = {
    backgroundColor: cells[num] === "x" ? "#0336FF" : "#ff0266",
    color: cells[num] === "x" ? "#fff" : "#FFDE03",
  };
  return (
    <div
      style={style}
      onClick={() => handleClick(num)}
      className="game_container"
    >
      {cells[num]}
    </div>
  );
};

export default Td;
