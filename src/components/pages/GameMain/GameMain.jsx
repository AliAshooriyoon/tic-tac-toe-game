import "./GameMain.css";
import Name from "../Name/Name.jsx";
import { useState } from "react";
import SquaresBox from "../SquaresBox/SquaresBox.jsx";
const GameMain = () => {
  const [user1, setUser1] = useState("Ali");
  const [user2, setUser2] = useState("Ahura");
  const [werSpielt, setWerSpielt] = useState(1);
  const tellMeWho = (who) => {
    setWerSpielt(who);
    console.log(werSpielt);
  };
  const submitName = (input, userID) => {
    userID == 1 ? setUser1(input) : setUser2(input);
  };
  return (
    <>
      <div className="gameMain">
        <div className="names">
          <Name
            name={user1}
            userID={1}
            submitId={submitName}
            whichUser={tellMeWho}
          />
          <Name
            name={user2}
            userID={2}
            submitId={submitName}
            whichUser={tellMeWho}
          />
        </div>
        <SquaresBox whichUser={werSpielt} />
      </div>
    </>
  );
};
export default GameMain;
