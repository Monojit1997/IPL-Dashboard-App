// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import Teamcard from '../TeamCard'

class IplDashboard extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamList: data, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="dashboard-container">
            <div className="logo-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul>
              {teamList.map(eachItem => (
                <Teamcard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default IplDashboard
