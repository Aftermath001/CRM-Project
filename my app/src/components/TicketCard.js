import React from 'react'
import {Link} from 'react-router-dom'
import DeleteBlock from './DeleteBlock'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import AvatarDisplay from './AvatarDisplay'

const TicketCard = ({color, ticket}) => {
  return (
    <div className="ticket-card">
      <Link to={`/ticket/${ticket.documentId}`} id="link">
       <div className="ticket-color"></div>
          <h3>{ticket.title}</h3>
          <AvatarDisplay ticket={ticket}/>
          <StatusDisplay status={ticket.status}/>
          <PriorityDisplay priority={ticket.priority}/>
          <ProgressDisplay progress={ticket.progress}/>
        </Link>
      <DeleteBlock/>
       
    </div>
  )
}

export default TicketCard