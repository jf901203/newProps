import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './search.css'
export default class Search extends Component {
  state={
    name:''
  }
  static propTypes={
    sendSearch:PropTypes.func.isRequired
  }
  hanleChange=(event)=>{
   const name=event.target.value.trim()
   if(!name){
     return
   }
   this.setState({
     name
   })

  }
  handleClick=(event)=>{

    const {name}=this.state
    this.props.sendSearch(name)
    
    event.preventDefault()
  }
  render() {
    const {name}=this.state
    return (
      <div className="search" >
        <h1 >Searh</h1>
         <form action="">
           <input type="text" value={name} onChange={this.hanleChange}/>
           <button onClick={this.handleClick}>search</button>
         </form>
      </div>
    )
  }
}
