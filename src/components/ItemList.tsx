import {Item} from "../ts/typeAliases";

function ItemList(props: Item){  return (
    <div className="list-item-container" >
      <li className="list-item">{props.text}</li>
      {props.children}
    </div>
  )
}

export default ItemList;