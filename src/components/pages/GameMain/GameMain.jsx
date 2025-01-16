import "./GameMain.css";
import Name from "../Name/Name.jsx";
import { useState } from "react";
const GameMain = () => {
  const [user1, setUser1] = useState("Ali");
  const [user2, setUser2] = useState("Ahura");
  return (
    <>
      <div className="gameMain">
        <div className="names">
          <Name name={user1} />
          <Name name={user2} />
        </div>
      </div>
    </>
  );
};
export default GameMain;
