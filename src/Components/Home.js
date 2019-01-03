import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Home extends Component {
  state = {};

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        console.log(project);
        return <ProjectItem project={project} />;
      });
    }
    return <div className="Home">{projectItems}</div>;
  }
}

export default Home;
