import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";
import { Category } from "../../components/Categories";

type FetchProductsParams = {
	selectedCategory: Category
	searchValue: string
}

export type TeamItemType = {
	id: String,
	img: String,
	name: String,
	fullname:String,
	experience: String,
    rank:String,
}

export const fetchTeam = createAsyncThunk(
	'team/fetchTeam',
	async () => {
		const { data } = await axios.get(`http://localhost:4444/team`)
		return data as TeamItemType[]
	}
)

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',

}

interface TeamSliceState {
	team: TeamItemType[];
	status: Status
}

const initialState: TeamSliceState = {
	team: [],
	status: Status.LOADING,
}


//if we make slice need import this method from "@reduxjs/toolkit"
const teamSlice = createSlice({
	name: 'team',
	initialState,
	//methods from reducers == actions
	reducers: {
		setProducts(state, action) {
			state.team = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTeam.pending, (state) => {
			state.team = []
			state.status = Status.LOADING
			//триває запит
		})
		builder.addCase(fetchTeam.fulfilled, (state, action: PayloadAction<TeamItemType[]>) => {
			state.team = action.payload
			state.status = Status.SUCCESS
			// запит успішний
		})
		builder.addCase(fetchTeam.rejected, (state) => {
			state.team = []
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
export const selectTeam = (state: RootState) => state.teamSlice

//in filterSlice.actions  are stored all actions
export const { setProducts } = teamSlice.actions

export default teamSlice.reducer