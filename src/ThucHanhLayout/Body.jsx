import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div style={{padding:"0 200px"}}>
        <Banner/>
        <div className="container px-lg-5">
        <div className='row'>
            <div className='col-3'>
                <Item/>
            </div>
            <div className='col-3'>
                <Item/>
            </div>
            <div className='col-3'>
                <Item/>
            </div>
            <div className='col-3'>
                <Item/>
            </div>
        </div>
        </div>
        
      </div>
    )
  }
}
