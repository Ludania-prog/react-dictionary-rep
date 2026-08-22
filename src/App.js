import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello world</h1>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center App-footer">
          Coded by Ludania David hosted on Neftlify
        </footer>
      </div>
    </div>
  );
}
