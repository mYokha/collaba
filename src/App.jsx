import React from 'react'
import photo from '../assets/img/test.jpg'
import './styles/styles.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Go ahead and create a cool app!</h1>
        <img src={photo} />
      </div>
    )
  }
}
