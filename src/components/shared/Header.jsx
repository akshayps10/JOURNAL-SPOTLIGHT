import React from 'react'
import { Link } from 'react-router-dom'
 

const Header = () => {
  return (
    <header className="shadow-lg sticky-top">
  <div className="d-flex justify-content-between align-items-center container p-4">
    <Link to={"/"}>
      <h1 className="font-weight-bold text-xl d-flex flex-wrap">
        <span className="text-primary"><i class="fa-solid fa-newspaper"></i> JOURNAL </span>
        <span className="text-danger">SPOTLIGHT</span>
      </h1>
    </Link>

    <form className="p-1  rounded d-flex align-items-center">
      <input
        type="text"
        placeholder="Search..."
        className="form-control ]"
      />
      <button className="btn btn-outline-secondary ms-2">
        <i className="fas fa-search text-muted"></i>
      </button>
    </form>

    <ul className="d-flex gap-4 list-unstyled mb-0">
      <Link to={"/"} className="d-none d-lg-inline text-muted text-decoration-none">
        <li className="hover-underline">Home</li>
      </Link>

      <Link to={"/about"} className="d-none d-lg-inline text-muted text-decoration-none">
        <li className="hover-underline">About</li>
      </Link>

      <Link to={"/news"} className="d-none d-lg-inline text-muted text-decoration-none">
        <li className="hover-underline">News Articles</li>
      </Link>
    </ul>

    
    <div className="dropdown">
  <button
    className="btn btn-link dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
  <i class="fa-solid fa-user"style={{ fontSize: '34px' }}></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li>
      <h6 className="dropdown-header">My Account</h6>
    </li>
    <li>
      <a className="dropdown-item text-muted">
        <div className="d-flex flex-column">
          <span>.</span>
          <span>.</span>
        </div>
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="/dashboard?tab=profile">
        Profile
      </a>
    </li>
    <li>
      <a className="dropdown-item text-danger" href="#" >
        Sign Out
      </a>
    </li>
  </ul>
</div>


      <Link to={"/sign-in"}>
        <button className="btn btn-primary">Sign In</button>
      </Link>

  </div>
</header>

  )
}

export default Header
