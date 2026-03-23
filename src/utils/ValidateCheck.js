import React, { useState } from 'react'
import checkedValid_data from './checkedValid_Data';

const ValidateCheck = (formdata,seterror) => {

   

  
   const errorData = {}; 
   //Kyuki JavaScript me arrays ka type bhi "object" hota hai.
   // console.log(typeof Object.entries(formdata));
   // console.log( Object.entries(formdata));
   // Object.entries() ek array return karta hai jisme har element [key, value] pair hota hai.

   Object.entries(formdata).forEach(([key,value]) =>{


     checkedValid_data[key].some((rule)=> {
         if(rule.required && !value){
             errorData[key] = rule.message;
             return true;
         }  

         if(rule.pattern && value && !rule.pattern.test(value)){
             errorData[key] = rule.message;
             return true;
         }
       return false;
     })
   })

   seterror(errorData);
   console.log(errorData)
   return errorData;
}

export default ValidateCheck;