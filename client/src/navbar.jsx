import react from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" alt="careerguide logo"></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Class 10</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Class 11-12</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Counsellors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Professionals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Study Abroad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Psychometric Test</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">918800442358</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
                <button className='btn'> Sign In</button>
                <button className="btn" type="submit">My DashBoard</button>
            </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;