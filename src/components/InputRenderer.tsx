import React from 'react';
import { Controller } from 'react-hook-form';
import { InputRendererProps } from '../types';

export const Label: React.FC<{ label: string }> = ({ label }) => {
    return (
        <label style={{ fontWeight: 'bold' }} className="form-label">
            {label}
        </label>
    );
};

export const InputRenderer: React.FC<InputRendererProps> = ({ inputDef, inputsFactory, fallbackInput, control }) => {
    const inputCmp = inputsFactory?.[inputDef.type] || fallbackInput;
    return (
        <div style={{ border: '1px solid grey', width: 250, height: 150 }}>
            {' '}
            <Label label={inputDef.label} />{' '}
            <Controller control={control} render={(form) => inputCmp(form)} name={inputDef.name} />{' '}
        </div>
    );
};
