import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { RouteList } from "../../routeList";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import styles from "./assets/styles.module.scss";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Suspense>
            <RouteList />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
