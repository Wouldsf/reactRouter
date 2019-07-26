import React, { Component } from 'react'
import './index.scss'
// 引入路由
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
const Home = () => <div>我是首页</div>
const About = () => <div>关于我们</div>
export default class Base extends Component {
    render() {
        return (
            <div>
                {/* BrowserRouter是路由容器，只有一个子元素，他是利用h5中historyAPI去做路由响应的 */}
                <Router>
                    <Link to='/' className='link'>首页</Link>
                    <Link to='/about' className='link'>关于</Link>
                    <Route path='/' render={Home} />
                    <Route path='/about' render={About} />
                </Router>
            </div>
        )
    }
}
