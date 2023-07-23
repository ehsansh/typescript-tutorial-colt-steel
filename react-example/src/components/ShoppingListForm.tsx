import React, { useRef } from 'react';

interface ShoppingListFormProps {
    onAddItem: (item: string) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onAddItem(inputRef.current!.value);
        inputRef.current!.value = '';
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='product name' ref={inputRef} />
            <button type='submit'>Add button</button>
        </form>
    );
}

export default ShoppingListForm;
