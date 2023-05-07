import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './Slices/filterSlice'

export const store = configureStore({
	reducer: {
		filtersSlice,
	},
})
