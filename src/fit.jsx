import React from 'react/addons';
import assign from 'object-assign';

class Fit extends React.Component {
  render() {
    let styles = {
      flex: '0'
    };
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}

Fit.contextTypes = {
  styles: React.PropTypes.object
}

export default Fit;