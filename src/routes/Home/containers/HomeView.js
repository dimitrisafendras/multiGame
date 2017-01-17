import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { SignInButton } from '../containers/SignInButton'
import { connect } from 'react-redux'

const style = {
  button: {
    color: 'black',
    border: '2px solid #a1a1a1',
    padding: '10px 40px',
    background: '#dddddd',
    width: '250px',
    borderRadius:'25px',
  },
  welcome: {
    color: 'black',
    fontFamily: 'Times New Roman'
  }
}
let HomeView = ({ username, onClick}) => {
  if (!username) {
    return(
      <div>
        <h1 style = {style.welcome}>Welcome!</h1>
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
          <SignInButton />
      </div>
    )}
  return (
    <div>
      <h1 style = {style.welcome} >Welcome {username}!</h1>
      <img
        alt='This is a duck, because Redux!'
        className='duck'
        src={DuckImage} />
        <button onClick= {() => onClick} style = {style.button} >Log Out</button>
    </div>
  )
}

HomeView = connect(
  ({home: { username }}) => ({
    username
  }),
  (dispatch) => ({
    onClick : dispatch({type: 'LOG_OUT'})
  })
)(HomeView)


export default HomeView
