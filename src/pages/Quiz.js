import React, { Component } from 'react'
import Header from '../components/Header'
import QuizContent from '../components/QuizContent/'
import styleQuiz from './quiz.scss'

class Quiz extends Component {
  constructor(props) {
    super(props)
    // an example array of items to be paged
    const data = [...Array(150).keys()].map(i => ({ id: i + 1 }))
    this.state = {
      title: 'StarQuiz!',
      sizeLogo: {
        lg: 70,
        md: 50,
        sm: 40,
      },
      time: 120000,
      data,
      boxesQuizzes: [
        {
          name: 'obi',
          movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
          specie: 'human',
          height: '167',
          hair: 'red',
          planet: 'Tatooine',
          vehicles: 'Imperial Speeder Bike',
        },
        {
          name: 'darth va...',
          movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
          specie: 'human',
          height: '189',
          hair: 'yellow',
          planet: 'Tatooine',
          vehicles: 'Imperial Speeder Bike',
        },
        {
          name: 'lorem',
          movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
          specie: 'human',
          height: '172',
          hair: 'purple',
          planet: 'Tatooine',
          vehicles: 'Imperial Speeder Bike',
        },
        {
          name: 'ipsum',
          movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
          specie: 'human',
          height: '184',
          hair: 'brunne',
          planet: 'Tatooine',
          vehicles: 'Imperial Speeder Bike',
        },
        {
          name: 'mussum',
          movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
          specie: 'human',
          height: '178',
          hair: 'black',
          planet: 'Tatooine',
          vehicles: 'Imperial Speeder Bike',
        },
        {
          name: 'ips',
          movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
          specie: 'human',
          height: '157',
          hair: 'blonde',
          planet: 'Tatooine',
          vehicles: 'Imperial Speeder Bike',
        },
      ],
    }
  }

  render() {
    const {
      sizeLogo,
      title,
      time,
      data,
    } = this.state
    return (
      <div className={styleQuiz.main}>
        <div className={`${styleQuiz.container} Grid-cell`}>
          <Header
            sizeLogo={sizeLogo}
            title={title}
            time={time}
          />
          <QuizContent boxesQuizzes={this.state.boxesQuizzes} data={data} />
        </div>
      </div>
    )
  }
}

export default Quiz
