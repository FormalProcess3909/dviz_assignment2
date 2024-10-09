import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div className="third_container">
                <div className="section_name">
                    <p>{this.props.work_experience.section_title}</p>
                </div>
                <div className="section_content">
                    <p><b>{this.props.work_experience.role1} at {this.props.work_experience.company1} ({this.props.work_experience.start_date1} - {this.props.work_experience.end_date1})</b></p>
                    <p>{this.props.work_experience.description1}</p>
                    <p><b>{this.props.work_experience.role2} at {this.props.work_experience.company2} ({this.props.work_experience.start_date2} - {this.props.work_experience.end_date2})</b></p>
                    <p>{this.props.work_experience.description2}</p>
                </div>
            </div>
        );
    }
}

export default WorkExperience;