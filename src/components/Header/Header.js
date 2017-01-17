import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/ticTacToe' activeClassName='route--active'>
      Tic Tac Toe
    </Link>
    {' · '}
    <Link to='/hangman' activeClassName='route--active'>
      Hangman
    </Link>
    {' · '}
    <Link to='/simon' activeClassName='route--active'>
      Simon
    </Link>
    {' · '}
    <Link to='/memoryGame' activeClassName='route--active'>
      MemoryGame
    </Link>

  </div>
)

export default Header
