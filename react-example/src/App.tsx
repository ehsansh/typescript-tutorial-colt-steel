import React, { useState } from 'react';

import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';

import { Item } from './models/item';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = function (product: string) {
        console.log(product);
    };

    // const items = [
    //     {
    //         id: 1,
    //         product: 'lemon',
    //         quantity: 3,
    //     },
    //     {
    //         id: 2,
    //         product: 'chickek breast',
    //         quantity: 2,
    //     },
    // ];

    return (
        <div>
            <ShoppingList items={items} />
            <ShoppingListForm onAddItem={addItem} />
        </div>
    );
}

export default App;
