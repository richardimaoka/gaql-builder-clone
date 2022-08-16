import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const CheckBox = ({ fieldName }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        id={fieldName}
        checked={checked}
        label="abc"
        onClick={() => {
          setChecked(!checked);
          console.log(`${fieldName} checkbox clicked, checked=${checked}`);
        }}
      />
      <label
        for={fieldName}
        onClick={() => {
          setChecked(!checked);
          console.log(`${fieldName} lable clicked, checked=${checked}`);
        }}
      >
        {fieldName}
      </label>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CheckBox fieldName={"ad_group.ad_rotation_mode"} />
      <CheckBox fieldName={"ad_group.ad_rotation_mode2"} />
      <CheckBox fieldName={"ad_group.ad_rotation_mode3"} />
      <CheckBox fieldName={"ad_group.ad_rotation_mode4"} />
      <CheckBox fieldName={"ad_group.ad_rotation_mode5"} />
    </div>
  );
}

export default App;
