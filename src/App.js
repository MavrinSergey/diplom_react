import './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Board from "./components/Board/Board";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className={classes.windowUser}>
                <Sidebar/>
                <Header/>
                <div className={classes.content}>
                    <Routes>
                        <Route path='/board' element={<Board toWork={props.toWork} inWork={props.inWork} agreement={props.agreement} completed={props.completed}/>}></Route>
                        <Route path='/projects' element={<Projects/>}></Route>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
