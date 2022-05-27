
import './App.css';
import {Route, Routes} from "react-router-dom";
import PokemonDiscoveryPage from "./components/PokemonDiscoveryPage";
import PokemonPage from "./components/PokemonPage";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={< PokemonDiscoveryPage/>}/>
                <Route path="/details/:name" element={<PokemonPage />}/>
            </Routes>
        </div>
    );
}



export default App;
