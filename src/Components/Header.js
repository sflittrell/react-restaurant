function Header(props) {

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
              <a className="nav-link active" aria-current="page" href="#">About</a>
              <a className="nav-link" href="#">Breakfast</a>
              <a className="nav-link" href="#">Lunch</a>
              <a className="nav-link" href="#">Appetizers</a>
              <a className="nav-link" href="#">Dinner</a>
              <a className="nav-link" href="#">Desserts</a>
              <a className="nav-link" href="#">Drinks</a>
            </div>
          </div>
        </div>
      </nav>

        </div>
    )
}

export default Header;