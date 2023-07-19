import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories,setCategories] = useState(allCategories)
  const filterItems = (category) =>{
    console.log(category);
    if(category === "all"){
      setMenuItems(data)
      return
    }
    const newItem = data.filter((item)=> item.category === category)
    setMenuItems(newItem)
  }
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItem={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
