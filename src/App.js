import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <header className="container-fluid">
        <div className="d-flex p-2 shadow justify-content-between align-items-center">
          <div>
            <h4 className="fw-normal">Company Name</h4>
          </div>
          <div>
            <ul className="d-flex align-items-center gap-4">
              <li className="list-group-item">
                <a
                  className=" text-dark"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Features
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className=" text-dark"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Enterprice
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className=" text-dark"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Support
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Pricing
                </a>
              </li>
              <li className="list-group-item">
                <button className="btn btn-info">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="w-75 mt-5 text-center mx-auto pt-3">
        <p className="title">Pricing</p>
        <p className="fs-4">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
        <div className="row gap-4">
          <div class="card text-center col shadow">
            <div class="card-header">Free</div>
            <div class="card-body">
              <h2 class="card-title">
                $0<span className="mo">/ mo</span>
              </h2>
              <p class="card-text">
                10 users included<br></br> 2 GB of storage<br></br> Email
                support<br></br> Help center access
              </p>
              <a href="#" class="btn btn-outline-primary w-100 mt-2 p-2">
                Sign up for free
              </a>
            </div>
          </div>
          <div class="card text-center col shadow">
            <div class="card-header">Pro</div>
            <div class="card-body">
              <h2 class="card-title">
                $15 <span className="mo">/ mo</span>
              </h2>
              <p class="card-text">
                20 users included<br></br> 10 GB of storage<br></br> Priority
                email support<br></br> Help center access
              </p>
              <a href="#" class="btn btn-primary w-100 mt-2 p-2">
                Get started
              </a>
            </div>
          </div>
          <div class="card text-center col shadow">
            <div class="card-header">Enterprice</div>
            <div class="card-body">
              <h2 class="card-title">
                $29 <span className="mo">/ mo</span>
              </h2>
              <p class="card-text">
                30 users included<br></br> 15 GB of storage<br></br> Phone and
                email support<br></br> Help center access
              </p>
              <a href="#" class="btn btn-primary w-100 mt-2 p-2">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5"></hr>
      </main>
      <footer className="container-fluid w-75 mx-auto d-grid mb-5 gap-5">
        <div>
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="bootstr"
          />
          <p className="pt-3">&#169; 2017-2018</p>
        </div>
        <div className="box">
          <h4>Features</h4>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Cool stuff
          </a>

          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Random feature
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Team feature
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Stuff for developers
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Another one
          </a>

          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Last time
          </a>
        </div>
        <div className="box">
          <h4>Resources</h4>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Resource
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Resource name
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Another resource
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Final resource
          </a>
        </div>
        <div className="box">
          <h4>About</h4>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Team
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Location
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Privacy
          </a>
          <a href="https://getbootstrap.com/docs/4.0/examples/pricing/#">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
