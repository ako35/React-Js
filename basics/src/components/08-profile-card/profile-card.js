import React from 'react'
import './profile-card.scss'
import Statistics from './statistics/statistics'

const statisticsInfo = [
    {
        title: 'Shot',
        stat: 2
    },
    {
        title: 'Follower',
        stat: 233
    },
    {
        title: 'Following',
        stat: 342
    }
]

const ProfileCard = (props) => {
    const img= require(`../../assets/img/profile-card.jpg`)
    const profileBackground = {
        backgroundImage: `url(${img})`
    }
  return (
    <div>
        <h2>Profile Card</h2>
        <div className="profile-card">
            <div className="header" style={profileBackground} >

            </div>
            <div className="content">
                <div className="avatar" style={profileBackground} ></div>
                <h3>{props.name}</h3>
                <h5>{props.location}</h5>
                <div className='stats'>
                    {
                        statisticsInfo.map((item, index) => (
                            <Statistics key={index} stat={item.stat} title={item.title} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard