import React from 'react'

import Head from 'next/head'
import Router from 'next/router'

import Header from './components/Header'
import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'

export default Page => class DefaultPage extends React.Component {
  static getInitialProps (ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser
    }
  }

  logout = (eve) => {
    if (eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount () {
    window.addEventListener('storage', this.logout, false)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.logout, false)
  }

  render () {
    return (
      <div>
        <Head>
          <title>Next.js + auth0</title>
        </Head>
        <div>
          <div>
            <Page {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
