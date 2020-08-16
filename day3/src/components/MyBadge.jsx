import React from 'react'
import {Badge} from 'react-bootstrap'

export default function MyBadge(props) {
    return (
        <div>
             <h1>
    My badge <Badge variant={props.color}  >{props.title}</Badge>
  </h1>
  <h1>
 My Badge 1 <Badge variant={props.color}>{props.title}</Badge>
  </h1>
        </div>
    )
}
