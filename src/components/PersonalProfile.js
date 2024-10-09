import React, { Component} from 'react';

class PersonalProfile extends Component {
    render() {
        return (
            <div className="second_container">
                <div className="section_name">
                    <p>{this.props.personal_profile.section_title}</p>
                </div>
                <div className="section_content">
                    <p>{this.props.personal_profile.description}</p>
                </div>
            </div>
        );
    }
}

export default PersonalProfile;