import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";
import { Category } from "../../components/Categories";

type FetchProductsParams = {
	selectedCategory: Category
	searchValue: string
}

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

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (params: FetchProductsParams) => {
		const { selectedCategory, searchValue } = params
		// const { data } = await axios.get(`https://64493955b88a78a8f0016922.mockapi.io/products?sortBy=.[0]&order=desc&filter=${selectedCategory.categoryProperty}&search=${searchValue}`)
		const { data } = await axios.post(`http://localhost:4444/products`,{selectedCategory ,searchValue})
		return data as ProductItem[]
	}
)

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',

}

interface ProductSliceState {
	products: ProductItem[];
	status: Status
}

const initialState: ProductSliceState = {
	products: [],
	status: Status.LOADING,
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
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.products = []
			state.status = Status.LOADING
			//триває запит
		})
		builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductItem[]>) => {
			state.products = action.payload
			state.status = Status.SUCCESS
	

			// запит успішний
		})
		builder.addCase(fetchProducts.rejected, (state) => {
			state.products = []
			state.status = Status.ERROR
			// трапилась помилка
		})
	}
	// варіант який написанийнижче використовується без застосування ts 
	// extraReducers: {
	// 	[fetchProducts.pending]: (state) => {
	// 		state.products = []
	// 		state.status = 'loading'
	// 		
	// 	},
	// 	[fetchProducts.fulfilled]: (state, action) => {
	// 		state.products = action.payload
	// 		state.status = 'success'
	// 		// запит успішний
	// 	},
	// 	[fetchProducts.rejected]: (state) => {
	// 		state.products = []
	// 		state.status = 'error'
	// 		// трапилась помилка
	// 	}
	// }
})

//select so as not to repeat the code
export const selectProducts = (state: RootState) => state.productsSlice

//in filterSlice.actions  are stored all actions
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer