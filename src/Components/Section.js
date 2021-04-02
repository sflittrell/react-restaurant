import Item from './Item'

function Section(props) {

    // let price = props.price

    // let sections = props.data.length ? props.data : [];

    console.log(props.index)


    return (
        <div className="mt-3">
            {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading${props.index}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.index}`} aria-expanded="false" aria-controls={`flush-collapse${props.index}`}>
                            */}<h1 className="fw-bold">{props.sectionTitle}</h1>
                            <hr></hr>
                                
                            {/*
                        </button>
                    </h2>
                    <div id={`flush-collapse${props.index}`} className="accordion-collapse collapse show" aria-labelledby={`flush-heading${props.index}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> */}
                            {props.section.data.map((item, i) => {
                                if (i < props.section.amount) {
                                    return <Item
                                        item={item}
                                        key={i}
                                        price={props.section.price}
                                    />
                                }
                            }
                            )}
                        </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Section