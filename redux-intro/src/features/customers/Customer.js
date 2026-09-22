import { useSelector } from "react-redux";

function Customer() {
  ///fetch fullName property from redux global store
  const customerName = useSelector((store) => store.customerDetails.fullName);
  return <h2>👋 Welcome,{customerName}</h2>;
}

export default Customer;
