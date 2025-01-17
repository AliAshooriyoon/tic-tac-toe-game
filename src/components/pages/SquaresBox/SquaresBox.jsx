import Square from "../Square/Square";
import "./SquaresBox.css";
// eslint-disable-next-line react/prop-types
const SquaresBox = ({ whichUser }) => {
  return (
    <>
      <div className="SquaresBox">
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
        <Square whichUserIs={whichUser} />
      </div>
    </>
  );
};
export default SquaresBox;
