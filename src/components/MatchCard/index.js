// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props

  const recentUpdateMatch = {
    competingTeamLogo: recentMatch.competing_team_logo,
    matchStatus: recentMatch.match_status,
    result: recentMatch.result,
    competingTeam: recentMatch.competing_team,
  }

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentUpdateMatch

  return (
    <li className="recent-match">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="compete-logo"
      />
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
