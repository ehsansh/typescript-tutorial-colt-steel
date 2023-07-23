import React, { useRef } from 'react';

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
    const producInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onAddItem(
            producInputRef.current!.value,
            parseInt(quantityInputRef.current!.value)
        );
        producInputRef.current!.value = '';
        quantityInputRef.current!.value = '';
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='product name'
                ref={producInputRef}
            />
            <input type='number' min={0} ref={quantityInputRef} />
            <button type='submit'>Add button</button>
        </form>
    );
}

export default ShoppingListForm;
