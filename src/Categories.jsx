const Categories = (props) => {
  return (
    <div className="btn-container">
      {props.categories.map((category) => {
        return (
          <button
            type="buttom"
            className="btn"
            key={category}
            onClick={()=> props.filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
