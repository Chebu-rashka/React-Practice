import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/item";

function ToDoList() {
  const [items, setItems] = useState([
    "Task Number 1",
    "Task Number 2",
    "Task Number 3",
  ]);
  const [todo, setTodo] = useState("");
  // const [todoId, setTodoId] = useState(-1);
  // const [saveItem, setSaveItem] = useState("");
  //   useEffect(() => {
  //     console.log("didmounting");
  //     // setItems(["todo1", "todo2", "todo3"]);
  //   }, []);
  //   //hooson bol ehnii uda ajilj bga
  //   //   useEffect(()=>{
  //   //   console.log(todo)
  //   // },[todo, items])
  //   //buh change deer sonsono
  //   // useEffect(()=>{
  //   //   console.log("update")
  //   // })
  //   //ymar ch state ajilsan dahij zuragdaj bga , when debugging
  // const onEdit = (item, itemId) => {
  //   setTodoId(itemId);
  //   setSaveItem(item);
  // };
  const onSave = (item, itemId) => {
    const temp = [...items];
    //state utgiig zaaval shine utga ru hurvuulj bj solino
    if (itemId > -1) {
      temp[itemId] = item;
    }
    setItems(temp);
    // setTodoId(-1);
  };
  const handleDelete = (itemId) => {
    setItems(
      [...items].filter((item, index) => {
        return !(index === itemId);
      })
    );
  };
  return (
    <div className="container">
      {" "}
      <h2>My To-Do List</h2>
      <p>
        <input
          className="placeholder"
          value={todo}
          placeholder={"Enter your new task here"}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            // const temp = [...items];
            // //state utgiig zaaval shine utga ru hurvuulj bj solino
            // if (todoId > -1) {
            //   temp[todoId] = todo;
            // } else {
            //   temp.push(todo);
            // }
            // setItems(temp);
            // setTodo("");
            // setTodoId(-1);
            const temp = [...items, todo];
            //state utgiig zaaval shine utga ru hurvuulj bj solino
            setItems(temp);
          }}
        >
          Click
        </button>
      </p>
      {items.map((item, itemId) => {
        return (
          <Item
            itemId={itemId}
            onSave={onSave}
            deleteItem={handleDelete}
            item={item}
          />
        );
      })}
    </div>
  );
}
export default ToDoList;

//

// ********

// {
//   const [items, setItems] = useState(["todo1", "todo2", "todo3"]);
//   const [todo, setTodo] = useState("");
//   useEffect(()=>{
//     console.log("mounting")
//     setItems(['todo1','todo2','todo3'])
//   },[])
//   //hooson bol ehnii uda ajilj bga
//   //   useEffect(()=>{
//   //   console.log(todo)
//   // },[todo, items])
//   //buh change deer sonsono
//   // useEffect(()=>{
//   //   console.log("update")
//   // })
//   //ymar ch state ajilsan dahij zuragdaj bga , when debugging
//   console.log(todo);
//   return (
//     <div>
//       {items.map((item, itemId) => {
//         return (
//           <div>
//             {" "}
//             <h2 key={itemId}>{item}</h2>
//             <button
//               onClick={() => {
//                 // const huuchinutga=[...items]
//                 // huuchinutga.splice(itemId,1)
//                 // setItems(huuchinutga)
//                 setItems(
//                   [...items].filter((item, index) => {
//                     // if (index === itemId) return false; //tuhain element butsaahgui
//                     // return true; //true ued buh elementiig butsaana
//                     return !(index === itemId);
//                   })
//                 );
//                 // alert(itemId)
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         );
//       })}
//       <input
//         value={todo}
//         onChange={(e) => {
//           // console.log(e)
//           setTodo(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           // const huuchinutga=[...items]
//           setItems([...items, todo]);
//           setTodo("");
//         }}
//       >
//         Add list
//       </button>
//     </div>
//   );
// }
