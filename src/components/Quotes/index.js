import React from "react";
import { useEffect, useState } from "react";

function Quotes() {

    const [quote, setQuote] = useState();
    const [character, setCharacter] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer gVBU6pctBRCL5GWwQ-4v'
        }

        const fetchData = async () => {
            const rawData = await fetch('https://the-one-api.dev/v2/quote', {
                headers: headers
            })

            const quotes = await rawData.json();
            // Pulls a random quote
            const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
            setQuote(quote.dialog);

            const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, {headers: headers});
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacter(character.name)
        };

        

        fetchData();
    }, []);

    return (
        <div>
            <div> {quote} </div>
            <div> - {character} </div>
        </div>
    )
}

export default Quotes;