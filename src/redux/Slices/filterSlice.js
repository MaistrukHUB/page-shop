import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	selectedCategory: {
		name: 'Всі',
		type: ""
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
		}

	}
})
//in filterSlice.actions  are stored all actions
export const { setCategory, setSort, setSearchValue } = filterSlice.actions

export default filterSlice.reducer