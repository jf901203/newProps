##一个文件夹怎么才能称之为包

1. 一个应用就是一个包
2. 有一个专门描述包的文件 package.json文件
3. package.json描述当前项目相关信息的文件

##package.json

1. 标识     name:名称  version:版本号
2. 项目依赖 运行时依赖  开发时依赖==>编译打包时需要
3. 打包运行的一些命令

##全局下载脚手架

1. 所有的应用都能看的见
2. 一次下载即可

##使用create-react-app 创建react应用

1. 一个初始化的空项目
2. 不是直接去网上下载
3. 而是通过一个工具去下载 这个工具就叫做脚手架

# 1.1. react脚手架(去下载一个空项目 而不是直接去网上下载)

## 1. xxx脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目

	1. 包含所有需要的配置
	2. 指定好了所有的依赖
	3. 可以直接安装/编译/运行一个简单的效果

## 2. react提供了一个用于创建react项目的脚手架库：create-creat-app

## 3. 项目的整体技术架构为:react+webpack+es6+eslint

## 4. 使用脚手架开发的项目的特点：模块化 组件化 工程化

##工程化

1. 通过一个命令就可以对项目进行打包 编译 运行
2. 一个npm命令就行了


##创建项目并启动

1. npm install -g create-react-app ===> 全局安装react脚手架
2. create-react-app demo ===>用react创建一个空项目
3. cd demo   ===>进入到项目中
4. npm start ===>在内存中编译 打包 并启动项目
5. npm root -g ===>查看全局下载根目录
6. npm build ===>打包生成应用


##给组件类声明属性权限

1. static propTypes={}
2. puplic propTypes={} 公有的成员属性
3. private propTypes={} 私有的成员属性 当前类作用域可以方法 子类不可以方法 实例不可以方法
4. protected propTypes={} 受保护的成员属性 当前类可以方法和子类可以方法 实例不可以方法


##给组件对象声明属性

1. state={}
2. addhandle=()=>{} 


##更新组件对象的状态 因为React没有做数据代理

1. 更新组件时必须调用this.setState()方法

##通过标签属性传递的数据都保留在props对象中

1. 读取属性this.props.xxx


##数组的splice()方法 这个方法增 删 改

1. splice(index,1) 删除1个元素
2. splice(index,0,item)增加一个元素
3. splice(index,1,item)替换一个


##axios发送异步ajax请求

####GET请求

1. 以字符串的形式传参
2. then()  成功的回调
3. catch() 异常的回调
4. get请求在url中带参数

		axios.get('/login?id=123').then(function(res){
		
		 const data=res.data
		
		}).catch(function(error){
		 
		  console.log(error)  
		
		})

		axios.get('/login',{
		
			pramas:{
			 id:123
			}
		
		}).then((res)=>{
		
		const data=res.data
		
		}).catch((error)=>{})


##POST请求

1. then()  成功的回调
2. catch() 异常的回调
3. post请求 post(url,{key:val})

	axios.post('/login',{
	
	 name:'zhanga',
	 pwd:'1222'
	
	}).then((res)=>{
       //res是一个对象 data是对象的属性
       const data=res.data
  
    }).catch((error)=>{})


##Fetch发送异步ajax请求

	###get请求
	
		fetch(url).then((res)=>{
		
		return res.json()
		
		}).then((data)=>{
		
		
		})


###react ajax

#### 前置说明

1. React本身只关注于界面 并不包含发送ajax请求的代码
2. 前端应用需要通过ajax请求与后台进行交互(json 数据)
3. jQuery框架本身有包含ajax请求的代码
4. Vue本身也不包含ajax请求的代码
5. react应用中需要集成第三方ajax库(或自己封装)


##常用的ajax请求库


1. jQuery比较重 不建议使用
2. axios 轻量级 建议使用
   - axios封装的是XMLHttpRequest对象的ajax
   - promise风格   .then().catch() 叫promise风格
   - 可以用在浏览器端和node服务器端
   
3. fecth 原生函数 但老版的浏览器不支持
   
   - 不再使用XMLHttpRequest对象提交ajax请求
   - 为了兼容低版本的浏览器 可以引入兼容fetch.js
   - 本身就是一个函数 可以在浏览器fetch 检测出来


##React中使用axios


	export default class App extends Component {
	
	  state={
	    resName:'',
	    resUrl:''
	  }
	
	 componentDidMount(){
	  const url=`https://api.github.com/search/repositories?q=react&sort=start`
	  axios.get(url).then((res)=>{//成功的处理
	    // 得到数据
	    const {name,html_url}=res.data.items[0]
	   //更新状态  
	    this.setState({
	      resName:name,
	      resUrl:html_url
	
	    })
	
	  }).catch((error)=>{//异常处理
	    
	    console.log(error)
	  })
	 }
	
	  render() {
	    const {resName,resUrl}=this.state
	    if(!resName){
	      return (
	        <div>
	          <h1>Loding...</h1>
	        </div>
	      )
	    }else{
	
	      return (
	        <div>
	          <h1>most is <a href={resUrl}>{resName}</a></h1>
	        </div>
	      )
	    }
	    
	  }
	}



##map()方法 返回新的数组 新的数组和原来的数组长度一样 数组中的元素都是对应的关系


	 const uers = result.map((item,index)=>{
	       return{
	         userName:item.login,
	         avatar:item.avatar_url
	        
	       }
	     })