import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./ItemMenu";
import Item from "./Item";
import AddForm from "./AddForm";
import ErrorPage from "./ErrorPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [numSnacks, setNumSnacks] = useState(0);
  const [drinks, setDrinks] = useState([]);
  const [numDrinks, setNumDrinks] = useState(0);

  useEffect(() => {
    async function getAll() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setNumSnacks(snacks.length);
      setDrinks(drinks);
      setNumDrinks(drinks.length);
      setIsLoading(false);
    }
    getAll();
  }, [numSnacks, numDrinks]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home numSnacks={numSnacks} numDrinks={numDrinks} />}
            />
            <Route
              path="/snacks"
              element={
                <Menu
                  items={snacks}
                  path="/snacks"
                  title="Snacks"
                  cardTitle="Food Menu"
                  cardText="Choose from our savory selection of mouth-watering dishes!"
                />
              }
            />
            <Route
              path="/snacks/:id"
              element={<Item items={snacks} cantFind="/snacks" />}
            />
            <Route
              path="/drinks"
              element={
                <Menu
                  items={drinks}
                  path="/drinks"
                  title="Drinks"
                  cardTitle="Drink Menu"
                  cardText="Whether you're in the mood for a stiff drink, or a soft drink, we've got you covered!"
                />
              }
            />
            <Route
              path="/drinks/:id"
              element={<Item items={drinks} cantFind="/drinks" />}
            />
            <Route
              path="/add"
              element={
                <AddForm
                  setNumSnacks={setNumSnacks}
                  setSnacks={setSnacks}
                  setNumDrinks={setNumDrinks}
                  setDrinks={setDrinks}
                />
              }
            />
            <Route
              path="/*"
              element={
                <ErrorPage
                  cardTitle="404 Not Found"
                  cardText="There seems to be a problem. We cannot find what you're looking for."
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
