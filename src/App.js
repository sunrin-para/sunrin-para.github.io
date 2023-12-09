import logo from './logo.svg';
import Footer from "./components/Footer";
import Jiwon from "./components/Jiwon";
import Essential from "./components/Essential";
import Home from "./components/Home";
import Header from "./components/Header";
import Curriculum from "./components/Curriculum";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Essential/>
            <Curriculum/>
            <Jiwon/>
            <Footer/>
        </div>
    );
}

export default App;
