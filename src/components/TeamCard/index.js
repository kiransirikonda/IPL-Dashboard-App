import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {team} = this.props
    const {id, name, teamImageUrl} = team
    return (
      <Link to={`/team-matches/${id}`} className="link">
        {/* <li className="team-card-container"> */}
        <li className="list-item">
          {/* <img className="ipl-logo-img" src={teamImageUrl} alt={name} /> */}
          <img className="image" src={teamImageUrl} alt={name} />
          <div className="team-para-container">
            <p className="team-name">{name}</p>
            {/* <p className="team-text-para">{name}</p> */}
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
