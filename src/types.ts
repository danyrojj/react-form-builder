import { ReactElement } from "react";
import { Control, UseFormProps, ValidationRule } from "react-hook-form";
import { ControllerCalllbackParam } from "./components/Demo";

export type InputsFactory = Record<string,(param:ControllerCalllbackParam)=>ReactElement>;

export type FallbackInputCmp = ()=>ReactElement;
export interface FormGeneratorProps {
    inputsDef:InputDef[];
    inputsFactory:InputsFactory //todo how to pas enum from outside
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
    inputsFactory:InputsFactory;
    fallbackInput?:FallbackInputCmp;
    control:Control
}