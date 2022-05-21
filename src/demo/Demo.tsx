import React from 'react';
import FormBuilder from '../components/FormBuilder.tsx';
import { ControllerCalllbackParam, Config as BuilderConfig } from '../types';


// todos:
// support more inputs
// default style
// factory as part of def?
// generator func

export const FallbackCmp = () => <>🚫</>;

const config:BuilderConfig = {
    text: {factory: (form: ControllerCalllbackParam) => (
        <input placeholder="text" value={form.field.value} onChange={form.field.onChange}></input>
    )},
    boolean: {factory:(form: ControllerCalllbackParam) => <input checked={form.field.value} onChange={form.field.onChange} type="checkbox"/>}
};
export const Demo: React.FC = () => {
    return (
        <div>
            Demo
            <FormBuilder
                inputsDef={[
                    { label: 'Test', name: 'test', type: 'text' },
                    { name: 'bad', type: 'bad', label: 'Bad' },
                    { label: 'Test3', name: 'test4', type: 'text' },
                    { label: 'Check', name: 'check', type: 'boolean' },
                ]}
                config={config}
                fallbackInput={FallbackCmp}
            />
        </div>
    );
};
