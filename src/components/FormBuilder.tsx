import React, { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { FormBuilderProps as FormBuilderProps } from '../types';
import { initializeFormValues } from '../utils/utils.tsx';
import { FormInput } from './FormInput.tsx';

const formId = 'form';
const FormBuilder: React.FC<FormBuilderProps> = ({ items, config, fallbackInput, formOptions }) => {
    const defaultValues =  initializeFormValues(items, config); // todo: support 3rd param
    
    const { control, handleSubmit ,getValues, reset} = useForm({ defaultValues });


    const onSubmit = (data: FieldValues) => console.log(data);
    const onError = (errors, e) => console.log(errors, e);
    return (
        <div style={{border:'1px solid lightgrey', borderRadius:25, padding:25}}>
            form
            <form onSubmit={handleSubmit(onSubmit, onError)} id={formId}>
                <div className="inputs-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                    {items.map((i) => (
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
