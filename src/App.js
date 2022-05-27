
import './App.css';
import {Route, Routes} from "react-router-dom";
import PokemonDiscoveryPage from "./components/PokemonDiscoveryPage";
import PokemonPage from "./components/PokemonPage";

function App() {


    return (
        <div className="App">
            <h1>◓ Pokemon Discovery ◓</h1>
            <Routes>
                <Route exact path="/" element={< PokemonDiscoveryPage/>}>
                    <Route path=":filter" element={<PokemonDiscoveryPage />}/>
                </Route>
                <Route path="/details/:name" element={<PokemonPage />}/>
            </Routes>
        </div>
    );
}



export default App;
