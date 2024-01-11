import "./App.css";
import Button from "remoteApp/Button";
import useCount from "remoteApp/store/countStore";

function App() {
  const [state, setState] = useCount(0);

  return (
    <>
      <h1>Host Application</h1>
      <Button />
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click host button: {state}
      </button>
    </>
  );
}

export default App;
