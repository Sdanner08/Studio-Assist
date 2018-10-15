import React, { Component } from 'react';
import API from "../../utils/API";
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'

class ClassDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfClass: "",
            room: "",
            ageGroup: "",
            instructor: "",
            id: ""
        }
    }
    loadClass() {
        API.getClass(this.props.match.params.id)
            .then(classResp => {
                this.setState({
                    nameOfClass: classResp.data.nameOfClass,
                    ageGroup: classResp.data.ageGroup,
                    room: classResp.data.room,
                    id: classResp.data._id
                })
                if (classResp.data.instructor) {
                    this.setState({ instructor: classResp.data.instructor.firstName + " " + classResp.data.instructor.lastName })
                }
            })
    }

    handleDelete() {
        console.log(this.state.id)
        API.deleteClass(this.state.id)
            .then(res => {
                const { history } = this.props;
                history.push("/classes")
            })
            .catch(err => {
                console.log(err)
            })

    }

    componentWillMount() {
        this.loadClass()
        // console.log(this.props.match.params.id)
        // console.log(this.state)
    }
    render() {
        return (<div>
            <div className="card mt-3">
                {console.log(this.state)}
                <div className="card-header bg-secondary">
                    <h1 className="display-3 text-white">{this.state.nameOfClass}</h1>
                </div>
                <div className="card-body">

                    <h3>Instructor: {(this.state.instructor) ? this.state.instructor : " "}</h3>
                    <h3>Age Group: {this.state.ageGroup}</h3>
                </div>
            </div>




            <DeleteBtn onClick={() => this.handleDelete()} >Delete Class</DeleteBtn>
        </div>)
    }
}

export default ClassDetails