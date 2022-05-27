import {Link} from "react-router-dom";

export default function Pokemon({name, url}){
    return(
        <div>
            <Link path ='/details/:pokemon-name'>
        <h1>{name}</h1>
            </Link>
        <image href={url}/>
        </div>
    )
}