const MenuItem = (props) => {
  return (
    <article className="menu-item">
        <img src={props.img} alt={props.title} className="img"/>
        <div className="item-info">
            <header>
                <h5>{props.title}</h5>
                <span className="item-price">{props.price}</span>
                <p className="item-text">{props.desc}</p>
            </header>
        </div>
    </article>
  )
}
export default MenuItem