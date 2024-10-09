import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header_container">
        <div className="name_job">
          <p><b>{this.props.header_info.name}</b><br />{this.props.header_info.job_title}</p>
        </div>
        <div className="info">
          <p>Email: <a href="malto:{this.props.header_info.email}">{this.props.header_info.email}</a></p>
          <p>Website: {this.props.header_info.website}</p>
          <p>Phone: {this.props.header_info.phone_num}</p>
        </div>
      </div>
    );
  }
}

export default Header;