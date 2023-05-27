import {createContext, useState} from 'react'
export const CartContext= createContext();

export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])
    
    const addToCart = (item) => {
        const exist = cartList.find(cartItem => (cartItem.id == item.id))
        if(exist){
            const newCartList = cartList.map(
                cartItem => {
                    return{ ...cartItem,
                         itemQuantity: (item.id == cartItem.id) ? cartItem.itemQuantity + item.itemQuantity : cartItem.itemQuantity
                        }
                })
            setCartList(newCartList)
        }else{
            setCartList([...cartList, item])
        }
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        const cartItemRemoved = cartList.filter(cartItem => id != cartItem.id)
        setCartList(cartItemRemoved)
    }

    return (
        <CartContext.Provider value ={{
            cartList,
            addToCart,
            removeList,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>

    )

}