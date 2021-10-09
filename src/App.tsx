import TileLayout from "./components/TileLayout";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__header-text">Pokedex Junior</h1>
      </header>
      <main>
        <TileLayout />
      </main>
    </div>
  );
}

export default App;
