import React from 'react';

interface Item {
    product: string;
    id: number;
    quantity: number;
}

interface ShoppingListProps {
    items: Item[];
}

function ShoppingList({ items }: ShoppingListProps): JSX.Element {
    return (
        <div>
            <h1>shopping list</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.product} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
