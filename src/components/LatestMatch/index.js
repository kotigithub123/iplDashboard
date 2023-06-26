// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatches} = props

  const updateMatches = {
    competingTeam: latestMatches.competing_team,
    competingTeamLogo: latestMatches.competing_team_logo,
    firstInnings: latestMatches.first_innings,
    manOfTheMatch: latestMatches.man_of_the_match,
    matchStatus: latestMatches.match_status,
    secondInnings: latestMatches.second_innings,
    umpires: latestMatches.umpires,
    venue: latestMatches.venue,
    result: latestMatches.result,
    data: latestMatches.data,
    id: latestMatches.id,
  }

  return (
    <div>
      <h1>Latest Matches</h1>
      <div className="match">
        <div>
          <p>{updateMatches.competingTeam}</p>
          <p>{updateMatches.data}</p>
          <p>{updateMatches.venue}</p>
          <p>{updateMatches.result}</p>
        </div>
        <div>
          <img
            src={updateMatches.competingTeamLogo}
            alt={updateMatches.competingTeam}
          />
        </div>
        <div>
          <p>First innings</p>
          <p>{updateMatches.firstInnings}</p>
          <p>Second innings</p>
          <p>{updateMatches.secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{updateMatches.manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{updateMatches.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
