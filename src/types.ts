import { ReactElement } from "react";
import { Control, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormProps, UseFormStateReturn, ValidationRule } from "react-hook-form";


export interface ControllerCalllbackParam {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
}


export interface FieldConfig {
factory:(param:ControllerCalllbackParam)=>ReactElement
}

export type Config = Record<string,FieldConfig>;

export type FallbackInputCmp = ()=>ReactElement;
export interface FormGeneratorProps {
    inputsDef:InputDef[];
    config:Config //todo how to pas enum from outside
    formOptions?:UseFormProps;
    fallbackInput?:FallbackInputCmp;
}



export interface InputDef{
    name:string;
    type:string;
    label?:string; // undefined/false would mean no label
    class?:string;
    rules?:ValidationRule; 
    defaultValue?;
    extras?;
    // factory?; // do i want to support providing factory as a part of item?
    disabled?:boolean;
}


export interface InputRendererProps{
    inputDef:InputDef;
    config:Config;
    fallbackInput?:FallbackInputCmp;
    control:Control
}