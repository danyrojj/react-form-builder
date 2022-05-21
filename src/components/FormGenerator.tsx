import React, { SyntheticEvent } from "react";
import { useForm, FieldValues, ErrorOption } from "react-hook-form";
import { FormGeneratorProps } from "../types";
import { InputRenderer } from "./InputRenderer.tsx";

const defaultValues = {test:''}
const FormGenerator:React.FC<FormGeneratorProps> = ({inputsDef,inputsFactory,fallbackInput, formOptions}) => {
    const {control, handleSubmit, getValues} = useForm({...formOptions,defaultValues});
    const onValid = async(values:FieldValues) => {console.log('submitting', values)}
    const onInvalid =async(e?:ErrorOption)=>{console.log('invalid', e)}

    const submitHandler = async (e:SyntheticEvent) => {
        e.preventDefault();
        console.log('values', getValues())
        // handleSubmit(async (values:FieldValues)=> await onValid(values),  async()=>await onInvalid())
    }
    return <div> form
        <form onSubmit={submitHandler}>
            <div className="inputs-container">
        {inputsDef.map(i=><InputRenderer key={i.name} inputDef={i} inputsFactory={inputsFactory} fallbackInput={fallbackInput} control={control}/>)}

        </div> 
        <button type="submit" onClick={submitHandler}>submit</button>
        </form>
    </div>
}
export default FormGenerator