import React, { Component } from 'react'
import PropTypes from 'prop-types'

import securePage from '../../hocs/securePage'

import { Sidebar } from './components'

import '../../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<Sidebar />
				
			    <div>
			      Hi <strong>{this.props.loggedUser.email}</strong>. This is a super secure page! Try loading this page again using the incognito/private mode of your browser.
			    </div>
			</div>
		)
	}
}

Home.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default securePage(Home)
