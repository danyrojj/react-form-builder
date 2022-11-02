import React, { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { FormBuilderProps as FormBuilderProps } from '../types';
import { initializeFormValues } from '../utils/utils.tsx';
import { FormInput } from './FormInput.tsx';

const formId = 'form';
const inputsContainerStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }
const formWrapperStyle  ={ border: '1px solid lightgrey', borderRadius: 25, padding: 25 };

const FormBuilder: React.FC<FormBuilderProps> = ({ items, config, fallbackInput, formOptions }) => {
    const defaultValues = initializeFormValues(items, config); // todo: support 3rd param

    const form = useForm({ defaultValues });
    const { control, handleSubmit, getValues, reset } = form;

    const onSubmit = (data: FieldValues) => console.log(form);
    const onError = (errors, e) => console.log('invalid', errors);

    const renderItems = () =>
        items.map((i) => (
            <FormInput key={i.name} inputDef={i} config={config} fallbackInput={fallbackInput} control={control} />
        ));

    return (
        <div style={formWrapperStyle}>
            form
            <form onSubmit={handleSubmit(onSubmit, onError)} id={formId}>
                <div className="inputs-container" style={inputsContainerStyle}>
                    {renderItems()}
                </div>
                <button form={formId}>submit</button>
            </form>
        </div>
    );
};
export default FormBuilder;
