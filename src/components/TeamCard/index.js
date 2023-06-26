// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplLists} = props
  const {name, teamImageUrl, id} = iplLists
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card-item">
        <img src={teamImageUrl} alt={name} className="image" />
        <p className="ipl-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
