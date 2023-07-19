import MenuItem from "./MenuItem"

const Menu = (props) => {
  return (
    <div className="section-center">
        {
            props.items.map((menuItem)=>{
                return <MenuItem key={menuItem.id} {...menuItem} />
            })
        }
    </div>
  )
}
export default Menu