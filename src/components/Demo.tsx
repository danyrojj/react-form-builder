import React from 'react';
import { ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from 'react-hook-form';
import FormGenerator from './FormGenerator.tsx';

// todos:
// support more inputs
// default style
// factory as part of def?
// generator func
export interface ControllerCalllbackParam {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
}

export const FallbackCmp = () => <>🚫</>;

const factory = {
    test: (form: ControllerCalllbackParam) => (
        <input placeholder="text" value={form.field.value} onChange={form.field.onChange}></input>
    ),
};
export const Demo: React.FC = () => {
    return (
        <div>
            Demo
            <FormGenerator
                inputsDef={[
                    { label: 'Test', name: 'test', type: 'test' },
                    { name: 'bad', type: 'bad', label: 'Bad' },
                    { label: 'Test3', name: 'test4', type: 'test' },
                ]}
                inputsFactory={factory}
                fallbackInput={FallbackCmp}
            />
        </div>
    );
};
