import ChildOne from "./ChildOne";
import "./App.css";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";
import ChildFour from "./ChildFour";

export const API_URL = "https://fakestoreapi.com/";

function App() {
  return (
    <>
      <ChildOne />
      <ChildTwo />
      <ChildThree />
      <ChildFour />
    </>
  );
}

export default App;
