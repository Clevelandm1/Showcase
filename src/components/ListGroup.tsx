import { MouseEvent, useState } from "react";

//{ items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //hook
  const [selectIndex, setSelectIndex] = useState(-1);

  //event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h4>{heading}</h4>

      {!items.length && <p>AH NO ITEM HERE</p> /*see below*/}
      <ul className="list-group">
        {
          //see below.
          items.map((item, index) => (
            <li
              key={item}
              className={
                selectIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;

/*
    *items.map()
    
    This line will map each element of the array to something else.

    items.map((item) => <li>{item}</li>);

    item is the name of the element in this context. The arrow means that each
    item will be turned into the line after the arrow. The line here says that we
    want the "li" element to use the item in the returned line. This is essentially
    a for-each loop. This line should then be copied, put into {braces}, and 
    placed appropriately in the code.

    *&&
    this is like an if statement.

    condition && result

    if condition is true then result else nothing
  */
