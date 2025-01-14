import "./GameMain.css";
import Name from "../Name/Name.jsx";
const GameMain = () => {
  return (
    <>
      <div className="gameMain">
        <div className="names">
          <Name name={"Ali"} />
          <Name name={"Sara"} />
        </div>
      </div>
    </>
  );
};
export default GameMain;
