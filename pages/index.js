import React, { Component } from 'react'
import { Nav } from './components'

import '../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<div className="header-bg">
					<div className="container">
						<Nav isActive="หน้าแรก"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;