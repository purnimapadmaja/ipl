import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(eachdata => ({
      id: eachdata.id,
      name: eachdata.name,
      imageUrl: eachdata.team_image_url,
    }))
    this.setState({teamsData: updateData, isLoading: false})
  }

  render() {
    const {teamsData} = this.state
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="ipl-list-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="header-heading">IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Tailer-spin" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <ul>
            {teamsData.map(eachteam => (
              <TeamCard key={eachteam.id} teamData={eachteam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
