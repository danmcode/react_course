import { useState } from "react";

import './ItemCounter.css'

interface Props {
    name: string,
    quantity?: number,
}

export const ItemCounter = ({
    name,
    quantity
}: Props) => {

    const [itemCounter, setItemCounter] = useState(quantity ?? 0)

    const handleAdd = () => {
        setItemCounter(itemCounter + 1);
    }

    const handleSubtract = () => {
        if (itemCounter <= 0) return;
        setItemCounter(itemCounter - 1);

    }

    return (
        <>
            <section
                className="item-row"
            >
                <span
                    className="item-text"
                    style={{
                        color: itemCounter === 1 ? 'red' : 'black'
                    }}>
                    {name}
                </span>
                <button onClick={handleAdd}>
                    +1
                </button>

                <span>{itemCounter}</span>
                <button onClick={handleSubtract}>
                    -1
                </button>
            </section>
        </>
    )
}
