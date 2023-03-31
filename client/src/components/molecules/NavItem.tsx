
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    path: string
    name: string
}
// 
function NavItem({ path, name }: Props) {
  return (
    <Link to={path} title={name}>
        {name}
    </Link>
  )
}

export default NavItem