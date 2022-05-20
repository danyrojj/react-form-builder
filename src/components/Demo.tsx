import React, { SyntheticEvent } from "react"
import { Controller, ControllerFieldState, ControllerRenderProps, ErrorOption, FieldValues, useForm, UseFormStateReturn } from "react-hook-form"
import { InputRendererProps, FormGeneratorProps } from "../types"

export interface ControllerCalllbackParam {
        field: ControllerRenderProps<FieldValues, string>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<FieldValues>;
}
export const Label:React.FC<{label:string}> = ({label}) => {
    return <label style={{fontWeight:'bold'}} className="form-label">{label}</label>
    }
    
export const InputRenderer:React.FC<InputRendererProps>=({inputDef,inputsFactory, fallbackInput, control})=> {
    const inputCmp  =inputsFactory?.[inputDef.type] || fallbackInput;
    return <div style={{ border:'1px solid grey', width:250, height:150}}> <Label label={inputDef.label}/> <Controller control={control} render={form=>inputCmp(form)} name={inputDef.name}/>  </div>
}


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



export const FallbackCmp = ()=>(<>🚫</>)


const factory={
    test: (form:ControllerCalllbackParam)=> <input placeholder='text' value={form.field.value} onChange={form.field.onChange}></input>
}
export const Demo:React.FC = () => {
    return <div>Demo
        <FormGenerator inputsDef={[{label:'Test', name:'test',type:'test'}, {name:'bad', type:'bad', label:'Bad'},{label:'Test3', name:'test4',type:'test'}, {name:'bad2', type:'bad', label:'Bad2'},, {name:'bad', type:'bad', label:'Bad'}, {name:'bad', type:'bad', label:'Bad'}, {name:'bad', type:'bad', label:'Bad'}, {name:'bad', type:'bad', label:'Bad'}, {name:'bad', type:'bad', label:'Bad'}]} inputsFactory={factory} fallbackInput={FallbackCmp}/>
    </div>
}
