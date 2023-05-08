import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	selectedCategory: {
		name: 'Всі',
		categoryProperty: ""
	},
	selectedSort: {
		name: 'популярності',
		sortProperty: 'cost'
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
		setSort(state, action) {
			state.selectedSort = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setFilters(state, action) {
			state.selectedCategory = action.payload.category
			state.selectedSort = action.payload.sort
			state.searchValue = action.payload.search
		},
	}
})

// console.log(initialState)
//in filterSlice.actions  are stored all actions
export const { setCategory, setSort, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer