import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <div className="app dark">
      <ThemeProvider>
        <UserProvider>
          <ApiProvider>
            <Header />
            <hr />
            <Container />
          </ApiProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
