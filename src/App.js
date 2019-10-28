
import React, { Component } from 'react'


import Item from './components/item/item'
import Search from './components/search/search'
export default class App extends Component {
 
  state={
    users:null,
    searchName:''
    
  }

  sendSearch=(name)=>{
    this.setState({
      searchName:name
    })
  }
  render() {
    const {searchName}=this.state
    return (
      <div>
        <Search sendSearch={this.sendSearch}/>
        <Item searchName={searchName}/>
      </div>
    )
  }
}
