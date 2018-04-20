import React, { Component } from 'react'
import securePage from '../../hocs/securePage'
import PropTypes from 'prop-types'
import { Sidebar, Header } from './components'

// import withRedux from 'next-redux-wrapper'
// import { initStore, bannerFetch } from '../actions'


import '../../styles/index.scss'

class Home extends Component {
	componentWillMount() {
		// this.props.bannerFetch();
	}

	render() {
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar />
				</div>

				<div className="contentAdmin">
					<Header title="Dashboard" />

					<div>
				      Hi <strong>{this.props.loggedUser.email}</strong>. This is a super secure page! Try loading this page again using the incognito/private mode of your browser.
				    </div>
				</div>
			    	
			</div>
		)
	}
}

Home.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

// {this.props.banners.map(item => {
// 			    	return <img key={item.banner_name} style={{width: '100%'}} src={item.banner_scr} alt={item.banner_tag}/>
// 			    })
// const mapStateToProps = ({ banner }) => {
// 	return {
// 		banners: banner.banners
// 	}
// }
// }


// export default withRedux(initStore, mapStateToProps, { bannerFetch })(securePage(Home))
export default securePage(Home)
