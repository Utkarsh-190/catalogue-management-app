import classes from "./App.module.css";
import Navbar from "./components/header/Navbar";
import ProductsList from "./components/list/ProductsList";
import PieChart from "./components/overlay/PieChart";

function App() {
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <Navbar />
      </nav>
      <div className={classes.body}>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
