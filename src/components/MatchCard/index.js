import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchesData} = this.props
    const {
      result,
      compeatingTeam,
      compeatingTeamLogo,
      matchStatus,
    } = matchesData
    return (
      <div className="match-details-container">
        <li className={`match-card ${matchStatus}`}>
          <img
            src={compeatingTeamLogo}
            alt="competing team {competing_team}"
            className="match-details-log"
          />
          <h1 className="match-details-name">{compeatingTeam}</h1>
          <p className="match-details-result">{result}</p>
        </li>
      </div>
    )
  }
}
export default MatchCard
