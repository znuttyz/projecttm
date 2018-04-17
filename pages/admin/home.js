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

			    {this.props.banners.map(item => {
			    	return <img key={item.banner_name} style={{width: '100%'}} src={item.banner_scr} alt={item.banner_tag}/>
			    })
			    	
				}
			</div>
		)
	}
}

Home.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

const mapStateToProps = ({ banner }) => {
	return {
		banners: banner.banners
	}
}

export default withRedux(initStore, mapStateToProps, { bannerFetch })(securePage(Home))
