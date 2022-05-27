import {useEffect, useState} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import Search from "./search";

export default function PokemonDiscoveryPage() {
    const [search, setSearch] = useState('')
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

    // useEffect(() => {
    //     const filtered = pok.filter((item) => item.name.includes(search));
    //     setPok(filtered);
    // }, [search]);

    const updateFilter = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <Search search={search} setSearch={updateFilter}/>
            {data ? (
                data.filter((item) => item.name.toLocaleLowerCase()
                    .startsWith(search))
                    .map((item, i) => <Pokemon key={i} name={item.name}/>)
            ) : (
                <p>Loading ..</p>
            )}
            {/*{data.map((p, i) => (*/}
            {/*   <Pokemon key={i} name={p.name} />*/}
            {/*))}*/}
        </div>
    )
}