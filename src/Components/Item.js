function Item(props) {


// console.log(props.item)
    return (

        <div className="mt-2">
            <h4 className="mt-2">
                {props.item.name}
            </h4>
            <p>
            {props.item.description}
            </p>
            <h5>
                {props.item.price}
            </h5>
        </div>
    )
}

export default Item