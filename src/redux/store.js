import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './Slices/filterSlice'
import cartSlice from './Slices/cartSlice'

export const store = configureStore({
	reducer: {
		filtersSlice,
		cartSlice,
	},
})
