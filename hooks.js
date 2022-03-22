// //creating custom hooks
// //export the function
// //starts with the keyword use
// //NOTE: Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

// //Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. So, it improves the readability and reduces the amount of code.


// import {useState} from 'react'

// export function useFormInput(initialValue) {
//     //use the useState hook here
//     const [value, setValue] = useState(initialValue);

//     function handleChange(e){
//         setValue(e.target.value);
//     }
//     //returning an OBJECT
//     return{
//         value,
//         onchange: handleChange
//     }
// }


import { useState } from 'react';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
