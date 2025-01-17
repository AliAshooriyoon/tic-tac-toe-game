import { useState } from "react";
import Square from "../Square/Square";
import "./SquaresBox.css";

const SquaresBox = () => {
  const [counter, setCounter] = useState(1);
  const tellClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <>
      <div className="SquaresBox">
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
        <Square countFunc={tellClick} count={counter} />
      </div>
    </>
  );
};
export default SquaresBox;
