import React, {Component} from 'react'
import loader from './assets/loader.gif'
import './loader.scss'

class Loader extends Component {
  render () {
    return (
      <div className={`loader loader-${this.props.position}`}>
        <img src={loader} />
        {this.props.msg}
      </div>
    )
  }
}

Loader.defaultProps = {
  position: 'top',
  msg: 'loading...'
}

export default Loader
