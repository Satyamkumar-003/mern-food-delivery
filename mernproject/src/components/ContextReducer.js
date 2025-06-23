import React, { createContext, useContext, useReducer } from 'react'

// creating the global context here from react
const CartStateContext= createContext();
// dispatch
const CartDispatchContext = createContext();
// using usereducer inplace of useState


// creating the button with wich all cart get clear mean dipatched
const reducer=(state,action)=>{
    // action mean add to cart , delete to cart
    // when to perform action we will dispatch and tell what action to be perform in the disaptch and have to make the changes in which state
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty , price:action.price,img:action.img,size:action.size}]
        case"REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
            case "DROP":
                let empArray =[]
                return empArray

            default:
                console.log("error in reducer");
    }

}


// children can be anything(component,)
export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
    )

}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);