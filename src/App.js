import './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Board from "./components/Board/Board";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import {Route, Routes} from "react-router-dom";
import store from "./redux/state";


function App(props) {
    return (
        <div className={classes.windowUser}>
            <Sidebar/>
            <Header/>
            <div className={classes.content}>
                <Routes>
                    <Route path='/board' element={<Board state={props.state}
                                                         dispatch={store.dispatch}
                    />}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
