import React from "react";

function Home(props) {
  return (
    <div className="container">
      <div className="row row-content align-items-center">
        <div className="col col-sm col-md">
          <div className="media">
            <div className="media-body">
              <h2>
                <span className="badge badge-secondary">Our Mission</span>
              </h2>{" "}
              <br></br>
              <p class=" d-none d-sm-block">
              At TECHNO Online Acadamy we recognize each student as an individual
              with much potential.The massive open online platform is a completed 
              web-based most efficient learning management system. It is used to 
              provide the most valuable courses, Modules, and learning materials 
              as well as provide exams, assessments and generate academic related
              reports.
              </p>
              <a role="button" class="btn btn-primary" href="button">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              class="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/mission.jpg"
              height="700"
                  width="498"
              alt="students"
            ></img>
          </div>
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="col col-sm col-md">
          <div className="media">
            <div className="media-body">
              <h2>
                <span className="badge badge-secondary">
                  Message from Director
                </span>
              </h2>{" "}
              <br></br>
              <p className=" d-none d-sm-block">
                Our goal at TECHNO Online Acadamy has been to challenge the students
                academically, grow them socially and emotionally and guide them towards
                independent thinking and problem solving.Students are encouraged to display good 
                character and to make
                wise choices that will mould them into being better citizens of
                our nation.
              </p>
              <a role="button" className="btn btn-primary" href="button">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              className="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/principal.jpg"
              alt="principal"
              height="700"
                  width="498"
            ></img>
          </div>
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="con-12 col-sm-4 col-md-3">
          <h3>Recent Events</h3>
        </div>
        <div className="col col-sm col-md">
          <h2>Year 3 Second semester Final Exam 2022</h2>
          <p>
          IT2525 (Data Structure and Algoritham) Final Exam will be held on 10th May 2022 at 10.30 am 
            to 1.30 am.
            {" "}
          </p>
          <a role="button" className="btn btn-danger m-2" href="button">
                {" "}
                Start Attempt
              </a>
        </div> 
        <div className="col col-sm col-md">
          <h2>Year 3 Second semester Final Exam 2022</h2>
          <p>
            IT2110 (Professional Skills) Final Exam will be held on 10th May 2022 at 09.30 am 
            to 10.30 am. There is a practical session. 
            {" "}
          </p>
          <a role="button" className="btn btn-danger m-2" href="button">
                {" "}
                Start Attempt
              </a>
        </div>
        
        <div className="col col-sm col-md">
          <h2>Year 3 Second semester Final Exam 2022</h2>
          <p>
            IT20101 (Mobile application Development) Final Exam will be held on 29th May 2022 at 09.30 am 
            to 11.30 am.
            {" "}
          </p>
          <a role="button" className="btn btn-danger m-2" href="button">
                {" "}
                Start Attempt
              </a>
        </div>
      </div>

      

      <div className="row mb-5 align-items-center">
        <div className="card card-body bg-light">
          <blockquote className="blockquote">
            <p className="mb-0">
              “The function of education is to teach one to think intensively
              and to think critically. Intelligence plus character that is the
              goal of true education”
            </p>
            <footer className="blockquote-footer">
              
              <cite title="Source Title">Martin Luther King Jr</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
