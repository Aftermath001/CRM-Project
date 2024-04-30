import React from 'react'
import TicketCard from '../components/TicketCard'

const Dashboard = () => {
  const tickets = [
    {
      category:'Q1 2024',
      color:'red',
      title:'Report File',
      owner:'Adams Alvin',
      avatar:'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
      status:'working on it',
      priority: 5,
      progress: 40,
      description:'This is a Report On the IGAD',
      timestamp:'2024-04-11T07:36:17+0000'

    },
    {
      category:'Q1 2024',
      color:'red',
      title:'Minutes Document',
      owner:'Victoria Minayo',
      avatar:'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg',
      status:'done',
      priority: 3,
      progress: 90,
      description:'This is a minutes report on the ICPALD meeeting',
      timestamp:'2024-05-15T10:00:17+0000'

    },
    {
      category:'Q2 2024',
      color:'blue',
      title:'Holiday Update',
      owner:'Steve Ingabo',
      avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OIUfFNdWLCY1sIjj_x8DuH7YO6uiJtj_0PZ6taQ6Aw&s',
      status:'stuck',
      priority: 2,
      progress: 70,
      description:'This is an update on the upcoming holiday',
      timestamp:'2024-04-30T08:00:13+0000'

    }
    
  ]
  // function to find unique categories in my data
  const uniqueCatergories = [
    ...new Set(tickets?.map(({category}) => category))
  ]
  // console.log(uniqueCatergories)
  return (
    <div className="dashboard">
        <h1>My Projects</h1>
        <div className="ticket-container">
          {tickets && uniqueCatergories?.map((uniqueCatergory, categoryIndex) =>(
            <div key={categoryIndex}>
              <h3>{uniqueCatergory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCatergory)
                .map((filteredTicket, _index)=>(
                  <TicketCard 
                  id={_index} 
                  color={filteredTicket.color}
                  ticket={filteredTicket}
                  />
                ))
              }
            </div>
          ))}

          
        </div>
    </div>
  )
}

export default Dashboard