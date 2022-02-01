export const initialState = {
    basket: [{
      id: "3254354345",
      title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 120GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/8"
    }],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_BASKET':
         // Logic for adding item to basket
         return { 
            ...state,
            basket: [...state.basket, action.item]
          };
      case 'REMOVE_FROM_BASKET':
        // Logic for Removing item from basket

         // we cloned the basket
        let newBasket = [...state.basket];
        
        // we check to see if product exists
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if (index >= 0) {
            // item exists in basket, remove it... 
            newBasket.splice(index, 1);
        } else {
          console.warn(
              `Cant remove product {id: ${action.id}} as it not in basket`
          );
        }
        return { 
            ...state,
            basket: newBasket
       };
      default:
          return state;
    }
}

export default reducer;