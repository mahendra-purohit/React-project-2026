const CustomerinitianState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function CustomerReducer(state = CustomerinitianState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/update":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

export function CreateCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date() },
  };
}

export function UpdateCustomer(fullName) {
  return {
    type: "customer/update",
    payload: { fullName },
  };
}
