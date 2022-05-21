import React, { SyntheticEvent } from 'react';
import { useForm, FieldValues, ErrorOption } from 'react-hook-form';
import { FormGeneratorProps } from '../types';
import { InputRenderer } from './InputRenderer.tsx';

const formId = 'form';
const defaultValues = { test: '' };
const FormGenerator: React.FC<FormGeneratorProps> = ({ inputsDef, inputsFactory, fallbackInput, formOptions }) => {
    const { control, handleSubmit } = useForm({ ...formOptions, defaultValues });

    const onSubmit = (data: FieldValues) => console.log(data);
    const onError = (errors, e) => console.log(errors, e);
    return (
        <div>
            {' '}
            form
            <form onSubmit={handleSubmit(onSubmit, onError)} id={formId}>
                <div className="inputs-container">
                    {inputsDef.map((i) => (
                        <InputRenderer
                            key={i.name}
                            inputDef={i}
                            inputsFactory={inputsFactory}
                            fallbackInput={fallbackInput}
                            control={control}
                        />
                    ))}
                </div>
                <button form={formId}>submit</button>
            </form>
        </div>
    );
};
export default FormGenerator;
