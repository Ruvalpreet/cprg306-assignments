function Item(props) {
  const { name, quantity, category } = props;
  return (
    <div className="border-4 p-10 m-10 bg-violet-900 hover:bg-violet-400">
      <h2 className="text-xl font-extrabold text-white">{name}</h2>
      <div className=" text-white">
        Buy {quantity} in {category}
      </div>
    </div>
  );
}

export default Item;
