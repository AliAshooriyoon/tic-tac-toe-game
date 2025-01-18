import { useState } from "react";
import "./Square.css";
import calculate from "../../calculate";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const Square = ({ countFunc, count, num }) => {
  //  ***--- States ---***
  const [textUsr, setTextUsr] = useState("");
  const [stopLoop, setStopLoop] = useState(false);
  const [startEffect, setStartEffect] = useState(false);

  //  ***--- Spacer ------***

  useEffect(() => {
    startEffect && calculate(`${textUsr} ${num}`);
  }, [textUsr]);
  //  ***--- Funcs ----***
  const clickedSquare = () => {
    if (!stopLoop) {
      console.log("g");
      countFunc();
      count % 2 ? setTextUsr("User1") : setTextUsr("User2");
      setStartEffect(true);

      setStopLoop(true);
    }
  };
  //  ***--- Spacer ------***
  return (
    <>
      <div className="square" onClick={() => clickedSquare()}>
        {/* {textUsr} */}
        {textUsr == "User1" ? (
          <img src="Star.png" alt="" className="img__usr" />
        ) : textUsr == "User2" ? (
          <img src="2_objects.png" alt="" className="img__usr" />
        ) : (
          ``
        )}
      </div>
    </>
  );
};
export default Square;
