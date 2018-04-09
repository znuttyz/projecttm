import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import defaultPage from '../../hocs/defaultPage'
import { show } from '../../utils/lock'

const CONTAINER_ID = 'put-lock-here'

class SignIn extends React.Component {
  componentDidMount () {
    show(CONTAINER_ID)
    if(this.props.isAuthenticated) {
      Router.push('/admin/home')
    }
  }
  render () {
    return <div id={CONTAINER_ID} />
  }
}

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default defaultPage(SignIn)
