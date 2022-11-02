import React, { useState } from 'react';
import FormBuilder from '../components/FormBuilder.tsx';
import { ItemDef } from '../types';
import { config } from './demo.config.tsx';
import { generateRandomForm } from './demo.utils.tsx';

// todos:
// default style
// factory as part of def?
// expose form methods
// default and consumer classnames
// support form sections/sorting
// override label via config
// override falback cmp via config not props
// onSubmit/onError from outside

// utils tests
// coverage
// unit/integration
// demo - in app manual json editing

export const FallbackCmp = () => <>🚫</>;

export const Demo: React.FC = () => {
    const [items, setItems] = useState<ItemDef[]>([]);
    const [key, setKey] = useState(0); // updating the key to force remount

    const genNewForm = () => {
        setKey((key) => key + 1);
        setItems(generateRandomForm(config));
    };
    return (
        <div>
            Demo
            <button onClick={genNewForm}>Generate random form</button>
            {items.length && <FormBuilder key={key} items={items} config={config} fallbackInput={FallbackCmp} />}
        </div>
    );
};
