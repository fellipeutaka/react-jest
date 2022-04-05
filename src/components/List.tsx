import { useState } from "react";

type ListProps = {
  initialItems: string[];
};

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeFromList(ID: number) {
    setTimeout(() => {
      setList((state) => state.filter((_, index) => index !== ID));
    }, 500);
  }

  return (
    <>
      <input
        placeholder="New item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => removeFromList(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
