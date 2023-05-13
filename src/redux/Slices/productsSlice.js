import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (params) => {
		const {
			selectedCategory,
			selectedSort,
			searchValue
		} = params
		const { data } = await axios.get(`https://64493955b88a78a8f0016922.mockapi.io/products?sortBy=${selectedSort.sortProperty}.[0]&order=desc&filter=${selectedCategory.categoryProperty}&search=${searchValue}`)
		return data
	}
)

const initialState = {
	products: []
}


//if we make slice need import this method from "@reduxjs/toolkit"
const productsSlice = createSlice({
	name: 'products',
	initialState,
	//methods from reducers == actions
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state, action) => {
			state.products = action.payload
			//триває запит
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.products = action.payload
			// запит успішний
		},
		[fetchProducts.rejected]: (state, action) => {
			state.products = action.payload
			// трапилась помилка
		}
	}
})

// console.log(initialState)
//in filterSlice.actions  are stored all actions
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer