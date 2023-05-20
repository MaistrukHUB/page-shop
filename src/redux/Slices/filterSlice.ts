import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";


type Category = {
	name: string;
	categoryProperty: string;
}

export interface FilterSliceState {
	selectedCategory: Category;
	searchValue: string
}

const initialState: FilterSliceState = {
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
		setCategory(state, action: PayloadAction<Category>) {
			state.selectedCategory = action.payload
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},
		setFilters(state, action: PayloadAction<FilterSliceState>) {
			state.selectedCategory = action.payload.selectedCategory
			state.searchValue = action.payload.searchValue
		},
	}
})


//select so as not to repeat the code
export const selectFilters = (state: RootState) => state.filtersSlice
export const selectFiltersCategory = (state: RootState) => state.filtersSlice.selectedCategory

//in filterSlice.actions  are stored all actions
export const { setCategory, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer