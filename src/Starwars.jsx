import { useEffect, useState } from "react";
import styles from './App.module.css'

export default function Startwars(props) {
const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCharacters(data.results);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <div className={styles.wrapper}>
            <h1>SW Characters</h1>
            <ol>
                {characters.map(character => <li key={character.url}>{character.name}</li>)}
            </ol>
        </div>
    )

}