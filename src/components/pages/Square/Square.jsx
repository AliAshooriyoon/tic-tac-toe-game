import { useState } from "react";
import "./Square.css";

const Square = ({ countFunc, count }) => {
  //  ***--- States ---***
  const [textUsr, setTextUsr] = useState("");
  //  ***--- Spacer ------***
  //  ***--- Funcs ----***
  const clickedSquare = () => {
    console.log("g");
    countFunc();
    count % 2 ? setTextUsr("User1") : setTextUsr("User2");
  };
  //  ***--- Spacer ------***
  return (
    <>
      <div className="square" onClick={clickedSquare}>
        {textUsr}
      </div>
    </>
  );
};
export default Square;
