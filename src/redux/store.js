import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './Slices/filterSlice'
import cartSlice from './Slices/cartSlice'
import productsSlice from './Slices/productsSlice'

export const store = configureStore({
	reducer: {
		filtersSlice,
		cartSlice,
		productsSlice,
	},
})
