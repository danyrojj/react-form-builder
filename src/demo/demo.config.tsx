import React from "react";
import { Config, ControllerCalllbackParam } from "../types";

export const config: Config = {
    fields: {
        text: {
            factory: (form: ControllerCalllbackParam) => (
                <input placeholder="text" value={form.field.value} onChange={form.field.onChange}></input>
            ),
            emptyValue: '',
        },
        boolean: {
            factory: (form: ControllerCalllbackParam) => (
                <input checked={form.field.value} onChange={form.field.onChange} type="checkbox" />
            ),
            emptyValue: true,
        },
        number: {
            factory: (form: ControllerCalllbackParam) => (
                <input type="number" value={form.field.value} onChange={form.field.onChange} />
            ),
            emptyValue: 0,
        },
        date: {
            factory: (form: ControllerCalllbackParam) => (
                <input type="date" value={form.field.value} onChange={form.field.onChange} />
            ),
            emptyValue: '2022-05-22',
        },
        range: {
            factory: (form: ControllerCalllbackParam) => (
                <input type="range" value={form.field.value} onChange={form.field.onChange} />
            ),
            emptyValue: 0,
        },
        json:{
            emptyValue:'',
            factory: (form:ControllerCalllbackParam)=>(<textarea value={form.field.value} onChange={form.field.onChange}/>)
        }
    },
};