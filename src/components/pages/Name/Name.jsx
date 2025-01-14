import "./Name.css";
// eslint-disable-next-line react/prop-types
const Name = ({ name }) => {
  return (
    <>
      <div className="name">
        {name}
        <button type="button">Verändern</button>
      </div>
    </>
  );
};

export default Name;
