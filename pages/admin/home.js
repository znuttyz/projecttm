import React, { Component } from 'react'
import securePage from '../../hocs/securePage'
import PropTypes from 'prop-types'
import { Sidebar } from './components'

import withRedux from 'next-redux-wrapper'
import { initStore, bannerFetch } from '../actions'


import '../../styles/index.scss'

class Home extends Component {
	componentWillMount() {
		this.props.bannerFetch();
	}

	render() {
		return (
			<div>
				<Sidebar />
				
			    <div>
			      Hi <strong>{this.props.loggedUser.email}</strong>. This is a super secure page! Try loading this page again using the incognito/private mode of your browser.
			    </div>

			    <img style={{width: '100%'}} src="/static/image/banner/banner1.jpg" />
			</div>
		)
	}
}

Home.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

const mapStateToProps = ({ banner }) => {
	console.log("banner", banner)
	return {
		banners: banner.banners
	}
}

export default withRedux(initStore, mapStateToProps, { bannerFetch })(securePage(Home))
