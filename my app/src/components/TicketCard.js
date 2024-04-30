import React from 'react'
import {Link} from 'react-router-dom'
import DeleteBlock from './DeleteBlock'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import AvatarDisplay from './AvatarDisplay'

const TicketCard = () => {
  return (
    <div className="ticket-card">
       <div className="ticket-color">
        <Link>
          <h3>Title</h3>
          <AvatarDisplay/>
          <StatusDisplay/>
          <PriorityDisplay/>
          <ProgressDisplay/>
        </Link>
        <DeleteBlock/>
       </div>
    </div>
  )
}

export default TicketCard