import useCount from "../store/countStore";

export default function Button() {
  const [state, setState] = useCount(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click remote button: {state}
      </button>
    </div>
  );
}
