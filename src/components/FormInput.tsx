import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps as FormInputProps } from '../types';

export const Label: React.FC<{ label: string }> = ({ label }) => {
    return (
        <label style={{ fontWeight: 'bold' }} className="form-label">
            {label}
        </label>
    );
};

export const FormInput: React.FC<FormInputProps> = ({ inputDef, config, fallbackInput, control }) => {
    const inputCmp = config?.fields?.[inputDef.type]?.factory || fallbackInput;
    return (
        <div style={{ width: 250, margin: 25 }}>
            <Label label={inputDef.label} />
            <Controller control={control} render={(form) => inputCmp(form)} name={inputDef.name} />
        </div>
    );
};
