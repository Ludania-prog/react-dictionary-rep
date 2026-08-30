import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center App-footer">
          Coded by{" "}
          <a
            href="https://github.com/Ludania-prog"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Ludania David{" "}
          </a>{" "}
          · Hosted on{" "}
          <a
            href="https://dicreactproject.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
