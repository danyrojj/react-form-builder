import { FieldValues } from 'react-hook-form';
import { Config, ItemDef } from '../types';

export const initializeFormValues = (itemDefs: ItemDef[], config: Config, formValues?: FieldValues):FieldValues =>
    itemDefs.reduce((acc, current) => {
        const value =
            formValues && formValues.hasOwnProperty(current.name)
                ? formValues[current.name]
                : config.fields[current.type].emptyValue;
        return { ...acc, [current.name]: value };
    }, {});
