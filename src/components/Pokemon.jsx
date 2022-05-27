import {Link} from "react-router-dom";

export default function Pokemon({name, image}) {
    return (
        <div>
            <h1>{name}</h1>
            <Link to={`/details/${name}`}> Details</Link>
        </div>
    )
}