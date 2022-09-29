import "./App.css";
import Break from "./component/break/Break";
import Cards from "./component/cards/Cards";
import Excercise from "./component/exercise/Excercise";
import Profile from "./component/mini-profile/Profile";
import Question from "./component/question/Question";

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
          <Question></Question>
        </div>
      </div>
    </div>
  );
}

export default App;
