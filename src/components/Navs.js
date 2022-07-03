import React from 'react'
import { Link } from 'react-router-dom'
const LINKS=[
    {to:'/',text:'Home'},
    {to:'/anu',text:'anu'}
]
const Navs = () => {
  return (
    <div>
        <ul>
            {LINKS.map(
                items=><li key={items.to}>
                    <Link to={items.to}>
            {items.text}
            </Link>
                </li>
            )}
            <li>
            <Link to="/anu">
            Go to S page
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navs