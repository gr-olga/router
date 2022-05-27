export default function Search({search, setSearch}){
    return(
        <input type='text' value={search} onChange={setSearch}/>
    )

}