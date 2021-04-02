import './Header.css'
function Header(props) {

    function breakfast() {
        props.clickHelper('Breakfast');
    }

    function lunch() {
        props.clickHelper('Lunch');
    }

    function appetizers() {
        props.clickHelper('Appetizers');
    }

    function dinner() {
        props.clickHelper('Dinner');
    }

    function desserts() {
        props.clickHelper('Desserts');
    }

    function drinks() {
        props.clickHelper('Drinks');
    }

    return (
        <div>
            <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-success" href="#">The Pickled Onion</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" onClick={breakfast}>Breakfast</a>
                            <a className="nav-link" onClick={lunch}>Lunch</a>
                            <a className="nav-link" onClick={appetizers}>Appetizers</a>
                            <a className="nav-link" onClick={dinner}>Dinner</a>
                            <a className="nav-link" onClick={desserts}>Desserts</a>
                            <a className="nav-link" onClick={drinks}>Drinks</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                <div class="col p-0">
                    <div className="d-flex">
                        <img className="img-fluid mainImage" src="./img/PickledOnion.png" />
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Header;