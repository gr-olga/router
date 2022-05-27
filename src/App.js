import axios from "axios";
import {useEffect, useState} from "react";
import './App.css';
import Pokemon from "./components/Pokemon";

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchPoke = async () => {
            try {
                const response = await axios.get(
                    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
                );
                setData(response.data.results);
            } catch (e) {
                console.log(e.message);
            }
        };
        fetchPoke()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                {data.map((p) => (
                        <Pokemon key={p.name} name={p.name} url={p.url}/>
                    ))}

            </header>
        </div>
    );
}

export default App;
