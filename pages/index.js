import React, { Component } from 'react'
import { Nav } from './components'

import '../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<div className="example">
					This is Home!!!
				</div>
				<Nav isActive="หน้าแรก"/>
			</div>
		)
	}
}

export default Home;