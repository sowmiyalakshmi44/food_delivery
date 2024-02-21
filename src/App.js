import React, { useEffect } from "react";
import {
  MainContainer,
  Header,
  CreateContainer,
  Menu,
  About,
  Service,
} from "./Components/index";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useStateValue } from "./Context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./Context/reducer";
import { Link as ScrollLink } from "react-scroll";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
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
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            {/* <Route path="/menu" element={<Menu />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/service" element={<Service />} /> */}
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
