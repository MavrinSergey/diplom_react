import './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Board from "./components/Board/Board";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className={classes.windowUser}>

            <Sidebar/>

            <Header/>

            <div className={classes.content}>
                <Board />
                {/*<Projects/>*/}
            </div>

            <Footer/>

        </div>
    );
}

export default App;
