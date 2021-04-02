function Item(props) {


// console.log(props.item)
    return (

        <div className="mt-2">
            <h3 className="mt-2 text-uppercase fw-bold">
                {props.item.name}
            </h3>
            <p>
            {props.item.description}
            </p>
            <h5 className="fst-italic">
                {props.item.price}
            </h5>
            <h6 className="text-center pb-5">
                ..............................................
            </h6>
        </div>
    )
}

export default Item