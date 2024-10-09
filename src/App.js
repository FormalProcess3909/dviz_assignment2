import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from "./components/WorkExperience";
import Skills from './components/Skills';
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_info: 
        {
          name: "Zh Rimel",
          job_title: "Data Scientist",
          email: "abc@gmail.com",
          website: "abc.github.io/abc",
          phone_num: "01234567890",
        },
      personal_profile:
      {
        section_title: "Personal Profile",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      work_experience:
      {
        section_title: "Work Experience",
          role1: "Job Title",
          company1: "Company",
          start_date1: "August 2022",
          end_date1: "December 2023",
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          role2: "Job Title 2",
          company2: "Company 2",
          start_date2: "August 2020",
          end_date2: "December 2021",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      key_skills: {
        section_title: "Key Skills",
        skill1: "A Key skill",
        skill2: "A Key skill",
        skill3: "A Key skill",
        skill4: "A Key skill",
        skill5: "A Key skill",
        skill6: "A Key skill",
        skill7: "A Key skill",
        skill8: "A Key skill",
        skill9: "A Key skill",
      },
      education: 
        {
          section_title: "Education",
          college1: "New Jersey Institute of Technology",
          degree1: "BS",
          major1: "Computer Science",
          start_date1: "2018",
          end_date1: "2022",
          gpa1: "3.9",
          college2: "New Jersey Institute of Technology",
          degree2: "MS",
          major2: "Data Science",
          start_date2: "2022",
          end_date2: "2023",
          gpa2: "4.0",
        },
    };
  }
render() {
  return (
    <div className="main_container">
        <Header header_info={this.state.header_info} />
        <PersonalProfile personal_profile={this.state.personal_profile}/>
        <WorkExperience work_experience={this.state.work_experience}/>
        <Skills key_skills={this.state.key_skills}/>
        <Education education={this.state.education}/>
    </div>
  );
}

}



export default App;
