import React, { SyntheticEvent } from 'react';
import { useForm, FieldValues, ErrorOption } from 'react-hook-form';
import { FormGeneratorProps as FormBuilderProps } from '../types';
import { FormInput } from './FormInput.tsx';

const formId = 'form';
const defaultValues = { test: '', check:true};
const FormBuilder: React.FC<FormBuilderProps> = ({ inputsDef, config, fallbackInput, formOptions }) => {
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
                        <FormInput
                            key={i.name}
                            inputDef={i}
                            config={config}
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
export default FormBuilder;
