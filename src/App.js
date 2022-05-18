import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateContainer from "./components/CreateContainer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvider";
import { getAllfoodItems } from "./utils/firebaseFunctions";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllfoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <h1 className="w-screen h-auto flex flex-col bg-primary ">
        <Header />
        <main className="mt-14 md:mt-20 px-7 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/CreateContainer" element={<CreateContainer />} />
          </Routes>
        </main>
      </h1>
    </AnimatePresence>
  );
}

export default App;
