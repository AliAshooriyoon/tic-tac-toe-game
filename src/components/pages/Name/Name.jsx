import { useState } from "react";
import "./Name.css";
// eslint-disable-next-line react/prop-types
const Name = ({ name }) => {
  const [changeTypeOfElm, setChangeTypeOfElm] = useState(false);
  const editName = () => {
    console.log("Hi");
    setChangeTypeOfElm(!changeTypeOfElm);
    console.log(changeTypeOfElm);
  };
  return (
    <>
      <div className="name">
        {!changeTypeOfElm ? <p>{name}</p> : <input type="text" name="" />}
        <button type="button" className="btn-usr" onClick={editName}>
          Verändern
        </button>
      </div>
    </>
  );
};

export default Name;
