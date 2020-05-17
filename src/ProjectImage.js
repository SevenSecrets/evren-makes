import React from 'react';

class ProjectImage extends React.Component {
  render() {
    return <img src={ this.props.imageUri } alt={ this.props.altText }/>
  }
}

export default ProjectImage
