import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";


export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (params, thunkApi) => {
		const {
			selectedCategory,
			searchValue
		} = params
		const { data } = await axios.get(`https://64493955b88a78a8f0016922.mockapi.io/products?sortBy=.[0]&order=desc&filter=${selectedCategory.categoryProperty}&search=${searchValue}`)
		return data
	}
)
export type ProductItem = {
	about: string;
	category: string;
	cost: number[];
	extent: number[];
	id: string;
	img: string[];
	name: string;
	rating: string;
	type: string;

}
interface ProductSliceState {
	products: ProductItem[];
	status: string;
}

const initialState: ProductSliceState = {
	products: [],
	status: 'loading',
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
			state.products = []
			state.status = 'loading'
			//триває запит
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.products = action.payload
			state.status = 'success'
			// запит успішний
		},
		[fetchProducts.rejected]: (state, action) => {
			state.products = []
			state.status = 'error'
			// трапилась помилка
		}
	}
})

//select so as not to repeat the code
export const selectProducts = (state: RootState) => state.productsSlice

//in filterSlice.actions  are stored all actions
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer