import React from 'react';

import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';

function App() {
    const items = [
        {
            id: 1,
            product: 'lemon',
            quantity: 3,
        },
        {
            id: 2,
            product: 'chickek breast',
            quantity: 2,
        },
    ];

    return (
        <div>
            <ShoppingList items={items} />
        </div>
    );
}

export default App;
