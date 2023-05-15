import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	selectedCategory: {
		name: 'Всі',
		categoryProperty: ""
	},
	searchValue: ''
}


//if we make slice need import this method from "@reduxjs/toolkit"
const filterSlice = createSlice({
	name: 'filters',
	initialState,
	//methods from reducers == actions
	reducers: {
		setCategory(state, action) {
			state.selectedCategory = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setFilters(state, action) {
			state.selectedCategory = action.payload.category
			state.searchValue = action.payload.search
		},
	}
})


//select so as not to repeat the code
export const selectFilters = (state) => state.filtersSlice
export const selectFiltersCategory = (state) => state.filtersSlice.selectedCategory

//in filterSlice.actions  are stored all actions
export const { setCategory, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer