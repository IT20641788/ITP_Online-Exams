import React from 'react';
import {  NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import UpdateFormExam from '../Exam.UpdateForm';



const UpdateExam = (props) =>{

    const id = props.name;
    return (
        <React.Fragment>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home"> <IoIosArrowForward /> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/ExamComponet">|  Exam</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/NewExamCompto">|  Modify Exam Page</NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="text-start m-3"> Modify Exam </h1>

            <UpdateFormExam name={id} />
            
        </React.Fragment>

    );
}

export default UpdateExam;