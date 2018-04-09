import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const links = [
  { href: '/admin', text: 'Home' },
  { href: '/admin/about', text: 'About' },
  { href: '/admin/secret', text: 'Top Secret', authRequired: true },
  { href: '/admin/auth/sign-in', text: 'Sign In', anonymousOnly: true },
  { href: '/admin/auth/sign-off', text: 'Sign Off', authRequired: true }
]

const getAllowedLinks = isAuthenticated => links
  .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
  .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly))

const Header = ({ isAuthenticated, currentUrl }) => (
  <div>
    {getAllowedLinks(isAuthenticated).map(l => (
      <Link prefetch key={l.href} href={l.href}>
        <div>
          {l.text}
        </div>
      </Link>
    ))}
  </div>
)

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired
}

export default Header
