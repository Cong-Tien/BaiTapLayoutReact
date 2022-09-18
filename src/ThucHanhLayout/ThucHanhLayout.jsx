import React, { Component } from 'react'
import Banner from './Banner'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'

export default class ThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body>
            <Banner/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </Body>
        <Footer/>
      </div>
    )
  }
}
