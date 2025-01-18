import { useState } from "react";
import Square from "../Square/Square";
import "./SquaresBox.css";
import calculate from "../../calculate";
const SquaresBox = () => {
  const [counter, setCounter] = useState(1);
  const tellClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <>
      <div className="SquaresBox">
        <Square countFunc={tellClick} count={counter} num={1} />
        <Square countFunc={tellClick} count={counter} num={2} />
        <Square countFunc={tellClick} count={counter} num={3} />
        <Square countFunc={tellClick} count={counter} num={4} />
        <Square countFunc={tellClick} count={counter} num={5} />
        <Square countFunc={tellClick} count={counter} num={6} />
        <Square countFunc={tellClick} count={counter} num={7} />
        <Square countFunc={tellClick} count={counter} num={8} />
        <Square countFunc={tellClick} count={counter} num={9} />
      </div>
    </>
  );
};
export default SquaresBox;
