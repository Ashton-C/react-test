import React, { Component } from "react";

class ProjectItem extends Component {
  state = {};
  render() {
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title}</strong> -
        {this.props.project.catagory} - {this.props.project.difficulty}
      </li>
    );
  }
}

export default ProjectItem;
