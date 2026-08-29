import { use, useActionState, useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
//////////////////////////////Eat and split//////////////////////
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default function App() {
  const [friends, setFriend] = useState(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false); //add form data ke liye
  const [selectedFriend, setselectedFriend] = useState(null); //when click on select button
  function handleShowAddFriend() {
    setshowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
    setshowAddFriend(false);
  }
  function handleSelection(friend) {
    setselectedFriend((curSelect) =>
      curSelect?.id === friend.id ? null : friend,
    );

    setshowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setselectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="friend.name" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 18,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");
    onAddFriend(newFriend);
  }
  return (
    <form className="form-add-friend" onSubmit={handleFormSubmit}>
      <label>Friend Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image Url:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const [whoIsPaying, setwhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setpaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
          )
        }
      />
      <label> {selectedFriend.name} Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setwhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

/////////////////////////////travel expenses split////////////////
// function Button({ children, onClick }) {
//   return (
//     <button className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// }
// export default function App() {
//   const [friends, setFriends] = useState(initialFriends);
//   const [showAddFriend, setshowAddFriend] = useState(false);
//   const [selectedFriend, setselectedFriend] = useState(null);
//   function handleShowAddFriend() {
//     setshowAddFriend((show) => !show);
//   }
//   function handleAddFriend(friend) {
//     setFriends((friends) => [...friends, friend]);
//     setshowAddFriend(false);
//   }
//   function handleSelection(friend) {
//     setselectedFriend((curSelect) =>
//       curSelect?.id === friend.id ? null : friend,
//     );
//   }
//   function handleSplitBill(value) {
//     setFriends((friends) =>
//       friends.map((friend) =>
//         selectedFriend.id === friend.id
//           ? { ...friend, balance: friend.balance + value }
//           : friend,
//       ),
//     );
//     setselectedFriend(null);
//   }

//   return (
//     <div className="app">
//       <div className="sidebar">
//         <FriendList
//           friends={friends}
//           onSelection={handleSelection}
//           selectedFriend={selectedFriend}
//         />
//         {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
//         <Button onClick={handleShowAddFriend}>
//           {showAddFriend ? "Close" : "Add Friend"}
//         </Button>
//       </div>
//       {selectedFriend && (
//         <FormSplitBill
//           onSelection={handleSelection}
//           selectedFriend={selectedFriend}
//           onSplitBill={handleSplitBill}
//         />
//       )}
//     </div>
//   );
// }
// function FriendList({ friends, onSelection, selectedFriend }) {
//   return (
//     <ul>
//       {friends.map((friend) => (
//         <Friend
//           friend={friend}
//           key={friend.id}
//           onSelection={onSelection}
//           selectedFriend={selectedFriend}
//         />
//       ))}
//     </ul>
//   );
// }
// function Friend({ friend, onSelection, selectedFriend }) {
//   const isSelected = selectedFriend?.id === friend.id;
//   return (
//     <li className={isSelected ? "selected" : ""}>
//       <img src={friend.image} alt={friend.name} />
//       <h3>{friend.name}</h3>
//       {friend.balance < 0 && (
//         <p className="red">
//           you owe {friend.name} {Math.abs(friend.balance)}
//         </p>
//       )}
//       {friend.balance > 0 && (
//         <p className="green">
//           {friend.name} owes you {Math.abs(friend.balance)}
//         </p>
//       )}
//       {friend.balance === 0 && <p>you and {friend.name} are even.</p>}
//       <Button onClick={() => onSelection(friend)}>
//         {isSelected ? "close" : "select"}
//       </Button>
//     </li>
//   );
// }

// function FormAddFriend({ onAddFriend }) {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("https://i.pravatar.cc/48");
//   function handleAddFriendSubmit(e) {
//     e.preventDefault();
//     if (!name || !image) return;
//     const id = crypto.randomUUID();
//     const newFriend = {
//       id,
//       name,
//       image: `${image}?=${id}`,
//       balance: 18,
//     };
//     onAddFriend(newFriend);
//   }
//   return (
//     <form className="form-add-friend" onSubmit={handleAddFriendSubmit}>
//       <label>Friend Name:</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>Image Url:</label>
//       <input
//         type="text"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <Button>Add</Button>
//     </form>
//   );
// }
// function FormSplitBill({ selectedFriend, onSplitBill }) {
//   const [transport, setTransport] = useState("");
//   const [food, setFood] = useState("");
//   const [other, setOther] = useState("");
//   const [paidByUser, SetpaidByUser] = useState("");
//   const [whoIsPaying, setwhoIsPaying] = useState("user");
//   const value = transport !== "" && food !== "" && other !== "";
//   const totalbill = value ? transport + food + other : "";
//   const paidByFriend = totalbill ? totalbill - paidByUser : "";
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!transport || !food || !other) return;
//     onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
//   }
//   return (
//     <form className="form-split-bill" onSubmit={handleSubmit}>
//       <h3>Group Travel</h3>
//       <h2>Split a bill with {selectedFriend.name}</h2>
//       <label>Transport Expenses</label>
//       <input
//         type="text"
//         value={transport}
//         onChange={(e) => setTransport(Number(e.target.value))}
//       />
//       <label>Food Expenses</label>
//       <input
//         type="text"
//         value={food}
//         onChange={(e) => setFood(Number(e.target.value))}
//       />
//       <label>Other Expenses</label>
//       <input
//         type="text"
//         value={other}
//         onChange={(e) => setOther(Number(e.target.value))}
//       />
//       <label>Total Expenses</label>
//       <input type="text" value={totalbill} disabled />
//       <label>Your Expense</label>
//       <input
//         type="text"
//         value={paidByUser}
//         onChange={(e) => SetpaidByUser(Number(e.target.value))}
//       />
//       <label>{selectedFriend.name} Expense</label>
//       <input type="text" value={paidByUser ? paidByFriend : ""} disabled />
//       <label>Who is paying the bill</label>
//       <select
//         value={whoIsPaying}
//         onChange={(e) => setwhoIsPaying(e.target.value)}
//       >
//         <option value="user">You</option>
//         <option value="friend">{selectedFriend.name}</option>
//       </select>

//       <Button>Split</Button>
//     </form>
//   );
// }
