// import React from 'react'
// import { type } from '@testing-library/user-event/dist/type';

// const  initialstate={
//     CardData:[]
// }

// export default function Reducerindex(state=initialstate,action) {
 
//     switch(action.type){
//         case ADD_TO_CARD
//         return{
//             ...state,
//             CardData:action.data
//         }
//         break;
//         default:
//             return state
//     }
// }
import React from 'react';

const initialState = {
  cartData: [], // Changed to cartData for consistency
};

export default function reducerIndex(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': // Corrected action type
      return {
        ...state,
        cartData: [...state.cartData, action.payload], // Added to the existing cartData array
      };
    default:
      return state;
  }
}
