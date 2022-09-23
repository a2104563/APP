import { useState } from "react";

export default function UseCounter(){
    const [value, setValue]=useState(0);

    const incrementar= ()=>{
        if(value<10){
            setValue(value+1);
        }
        else{
            setValue(10);
        }
    }
    const decrementar= ()=>{
        if(value>0){
            setValue(value-1);
        }
        else{
            setValue(0);
        }
    }
    return([value,incrementar, decrementar]);
};