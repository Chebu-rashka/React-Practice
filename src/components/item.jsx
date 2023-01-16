import React, { useEffect, useState } from "react";

export default function Item(props) {
  const { deleteItem, onSave, itemId, item } = props;
  const [edit, setEdit] = useState(true);
  const [save, setSave] = useState(item);

  useEffect(() => {
    setEdit(!edit);
    console.log("useeffect", item);
  }, [item]);
  return (
    <div key={itemId}>
      {edit ? (
        <div>
          <input
            value={save}
            onChange={(e) => {
              setSave(e.target.value);
            }}
          />
        </div>
      ) : (
        <h3>{item}</h3>
      )}

      <button
        onClick={() => {
          deleteItem(itemId);
        }}
      >
        Delete
      </button>
      {edit ? (
        <button
          onClick={() => {
            onSave(save, itemId);
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            setEdit(true);
            // setTodo("");
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
}
