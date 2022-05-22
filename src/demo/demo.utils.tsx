import { LoremIpsum } from "lorem-ipsum";
import { Config, ItemDef } from "../types";

export const randomIntFromInterval =(min:number, max:number):number => Math.floor(Math.random() * (max - min + 1) + min);

const lorem = new LoremIpsum();

export const generateRandomForm = (config: Config): ItemDef[] => {
    const numberOfItems = randomIntFromInterval(1, 15);
    const fieldNames = Object.keys(config.fields);
    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
        const type = fieldNames[randomIntFromInterval(0, fieldNames.length - 1)];
        const name = lorem.generateWords(1);
        const item = { type, label:name, name };
        items.push(item);
    }
    return items;
};