import "./App.css";
import AddFruit from "./Components/addFruit/AddFruit";
import Main from "./Components/main/Main";
import UpdateFruit from "./Components/updateFruit/UpdateFruit";
import { ContextProviderFruits } from "./Contexts/ContextProviderFruits";
import ComponentRoutes from "./Routers/ComponentRoutes";

function App() {
  return (
    <div className="App">
      <ContextProviderFruits>
        <ComponentRoutes>
          <Main />
          <AddFruit />
          <UpdateFruit />
        </ComponentRoutes>
      </ContextProviderFruits>
    </div>
  );
}

export default App;
