import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <h1 className="w-screen h-auto flex flex-col ">
        <Header />
      </h1>
    </AnimatePresence>
  );
}

export default App;
