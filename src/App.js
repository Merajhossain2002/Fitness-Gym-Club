import "./App.css";
import Break from "./component/break/Break";
import Cards from "./component/cards/Cards";
import Excercise from "./component/exercise/Excercise";
import Profile from "./component/mini-profile/Profile";

function App() {
  return (
    <div className="App container">
      <div className="row pb-3">
        <div className="col-12 col-lg-9 bg-light pt-5">
          <i className="fa-solid fa-dumbbell text-primary ms-2 fs-3"></i>{" "}
          <h3 className="d-inline text-primary ">Fitness Gym Club</h3>
          <div className="mt-4">
            <h5 className="text-dark fw-bold ms-2 mb-4">
              Select today's exercise
            </h5>
            <Cards></Cards>
          </div>
        </div>
        {/*============================= Mini profile section ================= */}
        <div className="col-12 col-lg-3 mt-3">
          <Profile></Profile>
          {/* ================== Add a break section =========================== */}
          <Break></Break>
          {/* ========================exercise detail section ========================= */}
          <Excercise></Excercise>
        </div>
        {/* ==============question section ======================== */}
        <div className="col-12 my-5">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How Does React Works?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  React uses a declarative paradigm that makes it easier to
                  reason about your application and aims to be both efficient
                  and flexible. It designs simple views for each state in your
                  application, and React will efficiently update and render just
                  the right component when your data changes.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  what is difference between props and state?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Props are used to pass data from one component to another. The
                  state is a local data storage that is local to the component
                  only and cannot be passed to other components. The
                  this.setState property is used to update the state values in
                  the component.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Where useEffect uses without Api data loading?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Where is useEffect used? useEffect after render: We know
                    that, the useEffect() is used for causing side effects in
                    functional components and it is also capable for handling
                    componentDidMount(), componentDidUpdate() and
                    componentWillUnmount() life-cycle methods of class based
                    components into functional component.
                  </p>
                  <strong>
                    there is many way to use useEffect , i will tell you 3 use
                    cases of the useEffect ReactJS hook
                  </strong>
                  <ul>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>
                      Running on state change: trigger animation on new array
                      value
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
