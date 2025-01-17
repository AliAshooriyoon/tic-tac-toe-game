import "./Square.css";
const Square = () => {
  const clickedSquare = ({ whichUserIs }) => {
    console.log("g");
    console.log(`Ich bin ${whichUserIs}`);
  };
  return (
    <>
      <div className="square" onClick={clickedSquare}></div>
    </>
  );
};
export default Square;
