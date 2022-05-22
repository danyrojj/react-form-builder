import React, { useState } from 'react';
import FormBuilder from '../components/FormBuilder.tsx';
import {   ItemDef } from '../types';
import { config } from './demo.config.tsx';
import { generateRandomForm } from './demo.utils.tsx';

// todos:
// default style
// factory as part of def?
// expose form methods
// default and consumer classnames

export const FallbackCmp = () => <>🚫</>;

export const Demo: React.FC = () => {
    const [items, setItems] = useState<ItemDef[]>([]);
    console.log('items', items);

const genNewForm = () => {
    setItems([]);
    setItems(generateRandomForm(config))
}
    return (
        <div>
            Demo
            <button onClick={genNewForm}>Generate random form</button>
            {items.length &&
            <FormBuilder items={items} config={config} fallbackInput={FallbackCmp}/>}
        </div>
    );
};
