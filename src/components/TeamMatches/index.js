// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {Teamsdata: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
    }
    this.setState({Teamsdata: updateData, isLoading: false})
  }

  render() {
    const {Teamsdata, isLoading} = this.state
    const {teamBannerUrl, recentMatches, latestMatchDetails} = Teamsdata
    return isLoading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="bg-teams-container">
        <img src={teamBannerUrl} alt="winner" className="team banner" />
        <LatestMatch latestMatches={latestMatchDetails} />
        <ul className="recentmatch-box">
          {recentMatches.map(eachMatch => (
            <MatchCard recentMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
