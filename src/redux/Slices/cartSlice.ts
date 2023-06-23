import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";


export type CartItemType = {
	id: number;
	idBySearch:string;
	img: string;
	name: string;
	extent: number;
	count: number;
	cost: number;
	category: string
}

export interface CartSliceState {
	products: CartItemType[];
	totalPrice: number;
	totalCount: number;
}

 const initialState: CartSliceState = {
	products: [],
	totalPrice: 0,
	totalCount: 0
}

const updateTotalPriceCount = (state: CartSliceState) => {
	state.totalPrice = state.products.reduce((sum, obj) => {
		return (obj.cost * obj.count) + sum
	}, 0)

	state.totalCount = state.products.reduce((sum, obj) => {
		return obj.count + sum
	}, 0)
}

//if we make slice need import this method from "@reduxjs/toolkit"
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	//methods from reducers == actions
	reducers: {
		addProduct(state, action: PayloadAction<CartItemType>) {
			const findProduct = state.products.find(obj => obj.name === action.payload.name && obj.cost === action.payload.cost)
			if (findProduct) {
				findProduct.count++
			} else {
				state.products.push({
					...action.payload,
					count: 1
				})
			}
			updateTotalPriceCount(state)
		},
		minusProduct(state, action: PayloadAction<CartItemType>) {
			const findProduct = state.products.find(obj => obj.id === action.payload.id)
			if (findProduct && findProduct.count <= 1) {
					state.products = state.products.filter((obj) => obj.id !== action.payload.id)
			} else if (findProduct && findProduct.count > 1) {
				findProduct.count--
			}
			updateTotalPriceCount(state)
		},
		removeProduct(state, action: PayloadAction<CartItemType>) {
				state.products = state.products.filter((obj) => obj.id !== action.payload.id)
				updateTotalPriceCount(state)
		},
		clearCart(state) {
				state.products = []
				updateTotalPriceCount(state)
		}
	}
})

export const selectCartProducts = (state: RootState) => state.cartSlice.products
export const selectCart = (state: RootState) => state.cartSlice

//in filterSlice.actions  are stored all actions
export const { addProduct, removeProduct, minusProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer