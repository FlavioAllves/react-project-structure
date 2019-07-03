import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination, Modal, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { flavio } from '../../actions'
import style from './styles.scss'
import QuizBox from '../QuizBox'

class _QuizContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageOfItems: [],
      openModal: false,
      contentOfModal: {},
    }
  }

  componentWillMount = () => {
    const { data } = this.props

    this.props.handleExemple('people/?page=2')

    const { pageOfItems } = this.state
    if (data !== pageOfItems) {
      const newArr = data.filter((item, key) => key < 8 && key > -1)
      this.setState({
        pageOfItems: newArr,
      })
    }
  }

  setItemsOfpage = (activePage) => {
    const { data } = this.props
    const itemsPerPage = 8
    const currentPage = activePage
    const maxInterval = currentPage * itemsPerPage
    const minInterval = currentPage === 1
      ? (maxInterval - itemsPerPage) - 1
      : maxInterval - itemsPerPage - 1

    return data.filter((item, key) => key < maxInterval && key > minInterval)
  }

  show = (contentOfModal) => {
    this.setState({ openModal: true, contentOfModal })
  }

  close = () => this.setState({ openModal: false })

  handleChangePagesOfItems = (e, { activePage }) => {
    const pageOfItems = this.setItemsOfpage(activePage)
    this.setState({ pageOfItems })
  }

  render() {
    const { data } = this.props
    const { pageOfItems, openModal, contentOfModal } = this.state
    return (
      <div>
        <div className={style.main}>
          {
            pageOfItems.map(item => (
              <QuizBox
                data={{
                  name: 'obi',
                  movies: ['Lorem ipsum dolor', 'sit amet', 'consectetur adipisicing', 'elit', 'Id delectus exercitationem'],
                  specie: 'human',
                  height: '167',
                  hair: 'red',
                  planet: 'Tatooine',
                  vehicles: 'Imperial Speeder Bike',
                }}
                key={item.id}
                id={item.id}
                openModal={this.show}
              />
            ))
          }
        </div>
        <Pagination
          className={style.pagination}
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={Math.round(data.length / 8)}
          onPageChange={this.handleChangePagesOfItems}
          color="yellow"
        />
        <Modal size="tiny" dimmer="blurring" open={openModal} onClose={this.close}>
          <Modal.Header>Description</Modal.Header>
          <Modal.Content image>
            <Modal.Description className={style.description} >
              <p><b className="bold">Specie:</b> {contentOfModal.specie}</p>
              <p><b className="bold">Movies:</b> {(contentOfModal.movies || []).map(item => `"${item}"`)}</p>
              <p><b className="bold">Height:</b> {contentOfModal.height}</p>
              <p><b className="bold">Hair:</b> {contentOfModal.hair}</p>
              <p><b className="bold">Planet:</b> {contentOfModal.planet}</p>
              <p><b className="bold">Vehicles:</b> {contentOfModal.vehicles}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

_QuizContent.defaultProps = {
  // boxesQuizzes: [],
  data: [],
  handleExemple: () => {},
}

_QuizContent.propTypes = {
  // boxesQuizzes: PropTypes.array,
  data: PropTypes.array,
  handleExemple: PropTypes.func,
}

const mapStateToProps = state => ({
  initial: state.initial,
})

const mapDispatchToProps = dispatch => ({
  handleExemple: (req) => {
    dispatch(flavio(req))
  },
})

const QuizContent = connect(mapStateToProps, mapDispatchToProps)(_QuizContent)
export default QuizContent
