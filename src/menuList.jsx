import MenUItem from "./menuItem.jsx";
function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenUItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;