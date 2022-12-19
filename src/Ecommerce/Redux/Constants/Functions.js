export function Insert(state, action) {
    if (state.CartItems?.length > 0) {
      if (state.CartItems.find((ele) => ele.id === action.payload.id)) {
        let ele1 = state.CartItems.find((ele) => ele.id === action.payload.id);
        let unmatchedele = state.CartItems.filter((ele) => ele.id !== ele1.id);
        return [...unmatchedele, { ...ele1, Quantity: ele1["Quantity"] + 1 }];
      } else if (!state.CartItems.find((ele) => ele.id === action.payload.id)) {
        return [...state.CartItems, { Quantity: 1, ...action.payload }];
      }
    } else {
      console.log("true");
      return [{ Quantity: 1, ...action.payload }];
    }
  }

 export function Deelete(state, action){
       return state.CartItems.map((ele)=>{
             if(ele.id===action.payload.id){
              return {...ele, Quantity: ele["Quantity"] - 1 }
            }else{
               return ele
            }
        })

  }