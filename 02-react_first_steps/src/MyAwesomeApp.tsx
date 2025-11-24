/**
 * 💡 ProTip
 * Put all constants outside of the main component
 * Why this is a recommendation?
 */

import type { CSSProperties } from "react";

const firstName = 'Daniel Alexander';
const lastName = 'Muelas Rivera';

const favoriteGames = [
    'Elden Ring',
    'Smash',
    'Metal Gear'
]

const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá'
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
}

export const MyAwesomeApp = () => {

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{isActive}</p>
            <p style={myStyles}>
                {favoriteGames}
            </p>
            <p>{JSON.stringify(address)}</p>
        </>

    )
}
