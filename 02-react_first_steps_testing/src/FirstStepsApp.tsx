import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string,
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Play Station V', quantity: 2 },
    { productName: 'Nintendo Switch 2', quantity: 5 },
    { productName: 'Super Smash', quantity: 1 }
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map((itemInCart) => (
                    <ItemCounter
                        key={itemInCart.productName}
                        name={itemInCart.productName}
                        quantity={itemInCart.quantity}
                    />
                ))
            }
        </>
    )
}