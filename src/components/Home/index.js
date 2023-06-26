// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplList: [], isLoading: true}

  componentDidMount() {
    this.getIplList()
  }

  getIplList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updateIplList = data.teams.map(eachList => ({
      name: eachList.name,
      id: eachList.id,
      teamImageUrl: eachList.team_image_url,
    }))

    this.setState({iplList: updateIplList, isLoading: false})
  }

  render() {
    const {iplList, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="ipl-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="iplList-container">
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            iplList.map(eachItem => (
              <TeamCard iplLists={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
