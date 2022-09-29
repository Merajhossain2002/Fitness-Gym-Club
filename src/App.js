import "./App.css";
import Card from "./component/card/Card";

function App() {
  return (
    <div className="App container">
      <div className="row pb-5">
        <div className="col-12 col-lg-9 bg-light pt-5">
          <i className="fa-solid fa-dumbbell text-primary ms-2 fs-3"></i>{" "}
          <h3 className="d-inline text-primary ">Fitness Gym Club</h3>
          <div className="mt-4">
            <h5 className="text-dark fw-bold ms-2 mb-4"> Select today's exercise </h5>
            <div className="grid">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default App;
