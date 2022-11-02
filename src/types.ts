import { ReactElement } from "react";
import { Control, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormProps, UseFormStateReturn, ValidationRule } from "react-hook-form";


export interface ControllerCalllbackParam {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
}


export interface FieldConfig {
factory:(param:ControllerCalllbackParam)=>ReactElement,
emptyValue:any;// literally any
}


export type Fields = Record<string,FieldConfig>

export interface Config {
    fields:Fields;
}

export type FallbackInputCmp = ()=>ReactElement;
export interface FormBuilderProps {
    items:ItemDef[];
    config:Config //todo how to pas enum from outside
    formOptions?:UseFormProps;
    fallbackInput?:FallbackInputCmp;
}



export interface ItemDef{
    name:string;
    type:string;
    label:string; 
    class?:string;
    rules?:ValidationRule; 
    defaultValue?:any;
    // extras?; placeholder
    // factory?; // do i want to support providing factory as a part of item?
    disabled?:boolean;
}


export interface FormInputProps{
    inputDef:ItemDef;
    config:Config;
    fallbackInput?:FallbackInputCmp;
    control:Control
}