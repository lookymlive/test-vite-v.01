import { useState } from "react";
import { Button } from "./components";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Button
        label={isActive ? "Activo" : "Inactivo"}
        parentMethod={toggleState}
      />
    </div>
  );
};



export default App;




