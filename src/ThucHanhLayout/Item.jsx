import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='card'>
      <img className='bg-secondary' src='...' height={225}/>
      <div className='card-body text-center'>
        <h2>Card Title</h2>
        <p>Get suggestions from Grammarly while you write in desktop applications and sites across.</p>
        <button className='btn btn-primary'>Find Out More!</button>
      </div>
      </div>
    )
  }
}
