import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className="fifth_container">
                <div className="section_name">
                    <p>{this.props.education.section_title}</p>
                </div>
                <div className="section_content">
                    <ul>
                        <li><b>{this.props.education.college1}</b></li>
                        <li>{this.props.education.degree1} in {this.props.education.major1}</li>
                        <li>{this.props.education.start_date1} - {this.props.education.end_date1}</li>
                        <li>GPA: {this.props.education.gpa1}</li>
                    </ul>
                    <ul>
                        <li><b>{this.props.education.college2}</b></li>
                        <li>{this.props.education.degree2} in {this.props.education.major2}</li>
                        <li>{this.props.education.start_date2} - {this.props.education.end_date2}</li>
                        <li>GPA: {this.props.education.gpa2}</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Education;