import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <main>
        {/* <Container> */}
          <Header/>
          <h1>Amazon app</h1>
          <Footer />
        {/* </Container> */}
      </main>
    </>
  );
}

export default App;
