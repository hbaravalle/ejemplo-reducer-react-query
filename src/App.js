import { useReducer } from "react";
import "./App.css";
import DetailCard from "./components/DetailCard";
import EmptyCard from "./components/EmptyCard";
import History from "./components/History";

const initialState = {
  search: "",
  searchHistory: [],
};

function App() {
  return (
    <div className="container">
      <header>
        <h1>Devfinder</h1>
        <form>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Github username_"
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </label>
        </form>
      </header>
      <div className="result">
        <DetailCard />
      </div>
      <History />
    </div>
  );
}

export default App;
