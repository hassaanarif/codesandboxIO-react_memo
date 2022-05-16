import { useEffect, memo } from "react";

function Input(props) {
  console.log("Input is mounting");

  useEffect(() => {
    console.log("Input has been mounted");
  });

  return (
    <div className="Input">
      <input
        type="text"
        name="input"
        value={props.inputValue}
        placeholder="Enter Input Here"
        onChange={(e) => props.onInputChange(e)}
      />
    </div>
  );
}

export default memo(Input);
