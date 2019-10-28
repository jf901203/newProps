import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import './item.css'
export default class Item extends Component {
  state={
    initView:true,
    loading:false,
    users:null,
    errorMsg:null
  }
 
  static propTyps={
    searchName:PropTypes.func.isRequired
  }

  // 监视props的变化 每一次数据的变化都会触发这个函数的调用
  componentWillReceiveProps(newProps){
   const {searchName}=newProps
  //发送请求请先改变状态 
   this.setState({
    initView:false,
    loading:true
   })
  //  发送请求
   const url=`https://api.github.com/search/users?q=${searchName}`
   axios.get(url).then((res)=>{
    
     const result=res.data.items
    //  map {return{}}===>({})
     const users = result.map((item,index)=>({
      userName:item.login,
      avatar:item.avatar_url,
      url:item.html_url
      }))

      this.setState({
        users,
        loading:false
      })
      

   }).catch((error)=>{
     this.setState({
      errorMsg:error,
      loading:false

     })
   })

     

  }

 
  render() {
    const {initView,loading,users,errorMsg}=this.state
    if(initView){
      return <h1>请输入关键字搜索</h1>
    }else if(loading){
      return <h1>Loading...</h1>
    }else if(errorMsg){
      return <h1>{errorMsg}</h1>
    }else{
      return (
        <div>
         <ul className="item_container">
           {
             users.map((item,index)=>
             <li key={index} className="items">
               <a href={item.url}>
                 <img src={item.avatar} alt=""/>
               </a>
              <p>{item.userName}</p>
             </li>)
           }
         </ul>
        </div>
      )
    }
    
  }
}
