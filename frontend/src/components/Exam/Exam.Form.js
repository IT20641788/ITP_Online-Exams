import React, {Component} from 'react'
import axios from 'axios';
import swal from 'sweetalert2';
// import SweetAlert from 'react-bootstrap-sweetalert';

//import moment from 'moment';

export default class form extends Component {
       constructor(props) {
         super(props);
  
    this.onChangeexamId = this.onChangeexamId.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangegrade = this.onChangegrade.bind(this);
    this.onChangesubject = this.onChangesubject.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangetimeStart = this.onChangetimeStart.bind(this);
    this.onChangetimeEnd = this.onChangetimeEnd.bind(this);
    this.onChangenotice = this.onChangenotice.bind(this);
    // this.onChangemark = this.onChangemark.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        examId: '',
        name: '',
        grade: '',
        subject: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        notice: '',
        //mark: [],
        // Submit:[]
    }

       }

       onChangeexamId(e) {
        this.setState({
            examId: e.target.value
        })
    }

    onChangename(e) {
            this.setState({
                name: e.target.value
            })
        }
        
    onChangegrade(e) {
        this.setState({
            grade: e.target.value
        })
    }

    onChangesubject(e) {
        this.setState({
            subject: e.target.value
        })
    }

    onChangedate(e) {
        this.setState({
            date: e.target.value
        })
    }

    onChangetimeStart(e) {
        this.setState({
            timeStart: e.target.value
        })
    }

    onChangetimeEnd(e) {
        this.setState({
            timeEnd: e.target.value
        })
    }

    onChangenotice(e) {
        this.setState({
            notice: e.target.value
        })
    }
    onChangemark(e) {
        this.setState({
            mark: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

    const Exam ={
            "examId":this.state.examId,
            "name":this.state.name,
             "grade": this.state.grade,
            "subject": this.state.subject,
            "date": this.state.date,
            "timeStart": this.state.timeStart,
            "timeEnd":this.state.timeEnd,
            "notice":this.state.notice,
            
    }

     console.log(Exam);

       axios.post('http://localhost:5000/backend/examR/add',Exam)
        .then((res)=>{
            console.log(res)
            swal.fire({
                title: "Done!",
                text: "Exam added Succesufully",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            }).catch((error) => console.log('error', error))
        
        });
    
        
    }

        render() {
            return ( <div >
                <h3 > NewExam  </h3> <form onSubmit = { this.onSubmit } >
                <div className = "form-group" style = { { marginBottom: '15px' }} >

            <label > Exam ID: </label> 
            <input type = "text"
            required className = "form-control"
            name = "examId"
            placeholder = "examId"
            value = { this.state.examId }
            onChange = { this.onChangeexamId }/> </div > 
            <div className = "form-group" >

            <label > Exam Name: </label> 
            <input type = "text"
            required className = "form-control"
            name = "name"
            placeholder = "Enter name"
            value = { this.state.name }
            onChange = { this.onChangename }/></div >

            <div className = "form-group" >
            <label > Year: </label>
            <input type = "number"
            required className = "form-control"
            name = "grade"
            placeholder = "Enter grade"
            value = { this.state.grade }
            onChange = { this.onChangegrade }/>
             </div >

            <div className = "form-group" >
            <label > Subject: </label>
            <input type = "text"
            required className = "form-control"
            name = "subject"
            placeholder = "subject"
            value = { this.state.subject }
            onChange = { this.onChangesubject }/>
             </div >
             
            <div className = "form-group" >
            <label > Date: </label> 
            <input type = "date"
            required className = "form-control"
            name = "date"
            placeholder = "Enter date"
            value = { this.state.date }
            onChange = { this.onChangedate }/> </div >

            <div className = "form-group" >
            <label > Start Time: </label> 
            <input type = "text"
            required className = "form-control"
            name = "timeStart"
            placeholder = "Enter time"
            value = { this.state.timeStart }
            onChange = { this.onChangetimeStart }/> </div >

            <div className = "form-group" >
            <label > End Time: </label> 
            <input type = "text"
            required className = "form-control"
            name = "timeEnd"
            placeholder = "Enter time"
            value = { this.state.timeEnd }
            onChange = { this.onChangetimeEnd }/> </div >

            <div className = "form-group" >
            <label > Notice: </label>
            <input type = "text"
            required className = "form-control"
            name = "notice"
            placeholder = "notice"
            value = { this.state.notice }
            onChange = { this.onChangenotice}/>
             </div >


             {/* <div className = "form-group" >
            <label > Mark: </label>
            <input type = "text"
            required className = "form-control"
            name = "number"
            placeholder = "mark"
            value = { this.state.mark}
            onChange = { this.onChangemark}/>
             </div > */}


             <div className = "form-group" >
            <input type = "submit"
            value = "submit"
            onClick={this.onSubmit}
            className = "btn btn-primary"/>
            </div>
            
             </form > </div>
        )
    }
}
                   
//export default form; 