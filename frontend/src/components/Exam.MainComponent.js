import React, { Component } from "react";
import Home from "./Exam.HomeComponent";
import Header from "./Exam.HeaderComponent";
import Footer from "./Exam.FooterComponent";
import Menu from "./Exam.MenuComponent";
import StudentList from "./Exam.StudentComponent";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ITEMS } from "../shared/Exam.functionItems";
import { STUDENTS } from "../shared/Exam.studentList";
import ExamComponet from "./Exam/Exam.Componet";
import NewExamCompt from "./Exam/NewExam/Exam.NewExamCompt";
import ExamUpdateComponet from "./Exam/Update/ExamUpdateComponet";
import GenReportComponet from "./Exam/GenReport/Exam.GenReportComponet";
import CompSearchExm from "./Exam/SearchExam/Exam.CompSearchExm";
import ComponetAddMark from "./Exam/AddMark/Exam.ComponetAddMark";
import Dashboard from "./Dashboard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
      students: STUDENTS,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <BrowserRouter>
          <Header />
          
          <Switch>
            <Route
              exact
              path="/menu"
              component={() => <Menu items={this.state.items} />}
            />
            <Route
              exact
              path="/studentList"
              component={() => <StudentList students={this.state.students} />}
            />
            <Route path="/ExamComponet">
              <ExamComponet />
            </Route>
            <Route path="/NewExamCompt">
              <NewExamCompt />
            </Route>
            <Route path="/ExamUpdateComponet/:examId" component={ExamUpdateComponet} exact={true} />
            <Route path="/GenReportComponet" component={GenReportComponet} />
            <Route path="/CompSearchExm" component={CompSearchExm} />
            <Route path="/ComponetAddMark/:examId" component={ComponetAddMark} />
            <Route path="/Dashboard" component={Dashboard}/>

            <Route path="/" component={HomePage} />
          </Switch>
          
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
