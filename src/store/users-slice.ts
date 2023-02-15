import {createSlice} from '@reduxjs/toolkit';
import {UsersState} from "store/users-slice.types";

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: '',
}
export const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        addUser(state, action) {
            const isUser = state.users.find((user) => user.id === action.payload.id )
            if (isUser === undefined) {
                state.users = [...state.users, action.payload]
            }
        },
    },
});

export default usersSlice.reducer;
export const {addUser, setUsers} = usersSlice.actions







// import {UsersState} from "store/users-slice.types";
// import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {fetchUsers} from 'api/api'
//
//
// const initialState: UsersState = {
//     users: [],
//     isLoading: false,
//     error: '',
// }
//
// export const usersSlice = createSlice({
//     name: 'usersPage',
//     initialState,
//     reducers: {
//         setUsers(state, action) {
//             const isUser = state.users.find((user) => user.id === action.payload.id )
//             if (isUser === undefined) {
//                 state.users = [...state.users, action.payload]
//             }
//             console.log(state.users)
//         }
//     },
//     extraReducers: {
//         [fetchUsers.pending.type]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchUsers.fulfilled.type]: (state, action) => {
//             state.isLoading = false;
//             state.error = '';
//             state.users = action.payload;
//         },
//         [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
//             state.isLoading = false;
//             state.error = action.payload;
//         },
//     }
// });
//
// export default usersSlice.reducer;
// export const {setUsers} = usersSlice.actions