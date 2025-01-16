import "./GameMain.css";
import Name from "../Name/Name.jsx";
import { useState } from "react";
const GameMain = () => {
  const [user1, setUser1] = useState("Ali");
  const [user2, setUser2] = useState("Ahura");
  const submitName = (input, userID) => {
    userID == 1 ? setUser1(input) : setUser2(input);
  };
  return (
    <>
      <div className="gameMain">
        <div className="names">
          <Name name={user1} userID={1} submitId={submitName} />
          <Name name={user2} userID={2} submitId={submitName} />
        </div>
      </div>
    </>
  );
};
export default GameMain;
