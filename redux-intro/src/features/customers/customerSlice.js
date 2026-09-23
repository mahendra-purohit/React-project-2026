import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};
//////////////////using redux toolkit
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    CreateCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});
export const { CreateCustomer } = customerSlice.actions;
export default customerSlice.reducer;

/////////////////////without using redux toolkit///////////////////////
// export default function CustomerReducer(state = initianState, action) {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/update":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };
//     default:
//       return state;
//   }
// }

// export function CreateCustomer(fullName, nationalId) {
//   return {
//     type: "customer/create",
//     payload: { fullName, nationalId, createdAt: new Date() },
//   };
// }

// export function UpdateCustomer(fullName) {
//   return {
//     type: "customer/update",
//     payload: { fullName },
//   };
// }
