import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps as FormInputProps } from '../types';
import { Label } from './Label.tsx';

const formInputStyle ={ width: 250, margin: 25 }

export const FormInput: React.FC<FormInputProps> = ({ inputDef, config, fallbackInput, control }) => {
    const inputCmp = config?.fields?.[inputDef.type]?.factory || fallbackInput;
    return (
        <div style={formInputStyle}>
            <Label label={inputDef.label} />
            <Controller control={control} render={(form) => inputCmp(form)} name={inputDef.name}/>
        </div>
    );
};
