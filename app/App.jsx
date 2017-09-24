import React from 'react'
import photo from '../assets/img/test.jpg'
import hash from 'object-hash'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>{hash('Go ahead and create a cool app!')}</h1>
        <img src={photo} />
      </div>
    )
  }
}
