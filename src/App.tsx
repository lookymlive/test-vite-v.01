import { useEffect, useState } from "react";
import { Button } from "./components";

const App = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    // Simular datos de API
    setTimeout(() => {
      setUsers(["Alice", "Bob", "Charlie"]);
    }, 1000);
  }, []);

  const greetUser = (name: string) => {
    alert(`Hola, ${name}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Usuarios:</h1>
      {users.length === 0 ? (
        <p>Cargando usuarios...</p>
      ) : (
        users.map((user) => (
          <Button
            key={user}
            label={`Saludar a ${user}`}
            parentMethod={() => greetUser(user)}
          />
        ))
      )}
    </div>
  );
};

export default App;




