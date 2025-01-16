import { useState } from "react";
import "./Name.css";
// eslint-disable-next-line react/prop-types
const Name = ({ name, submitId, userID }) => {
  const [changeTypeOfElm, setChangeTypeOfElm] = useState(false);
  const [newName, setNewName] = useState("");
  // const setNewNameFunc = () => {};
  const editName = () => {
    console.log("Hi");
    setChangeTypeOfElm(!changeTypeOfElm);
    // console.log(changeTypeOfElm);
    changeTypeOfElm && submitId(newName, userID);
  };
  return (
    <>
      <div className="name">
        {!changeTypeOfElm ? (
          <p>{name}</p>
        ) : (
          <input
            type="text"
            name=""
            className="input_text"
            placeholder={name}
            onChange={(event) => setNewName(event.target.value)}
          />
        )}
        <button type="button" className="btn-usr" onClick={editName}>
          Verändern
        </button>
      </div>
    </>
  );
};

export default Name;
