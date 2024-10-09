import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return(
            <div className="fourth_container">
                <div className="section_name">
                    <p>{this.props.key_skills.section_title}</p>
                </div>
                <div className="skills_list">
                    <li>{this.props.key_skills.skill1}</li>
                    <li>{this.props.key_skills.skill2}</li>
                    <li>{this.props.key_skills.skill3}</li>
                    <li>{this.props.key_skills.skill4}</li>
                    <li>{this.props.key_skills.skill5}</li>
                    <li>{this.props.key_skills.skill6}</li>
                    <li>{this.props.key_skills.skill7}</li>
                    <li>{this.props.key_skills.skill8}</li>
                    <li>{this.props.key_skills.skill9}</li>
                </div>
            </div>
        );
    }
}

export default Skills;