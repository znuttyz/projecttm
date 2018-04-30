import React, { Component } from 'react'
import { Nav, Banner } from './components'

import '../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<Nav isActive="หน้าแรก"/>
				<Banner />
			</div>
		)
	}
}

export default Home;