import "./App.css";
import RewardPoints from "components/RewardPoints";
import { StoreProvider } from "context/AppContext";

function App() {
  return (
    <>
      <h1>Reward Program</h1>
      <StoreProvider>
        <RewardPoints />
      </StoreProvider>
    </>
  );
}

export default App;
