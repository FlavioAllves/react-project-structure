import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import style from './style.scss'

const QuizBox = ({ id, openModal, data }) => (
  <div className={style.main} key={id}>
    <Card className={style.card} fluid>
      <Card.Content className="u-flex u-flexJustifyCenter u-flexAlignCenter">
        <Image
          size="small"
          src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          circular
        />
      </Card.Content>
      <Card.Content className="u-flex u-flexJustifyCenter u-flexAlignCenter" extra>
        <Button.Group size="large">
          <Button>
            <Icon name="question" />
          </Button>
          <Button.Or />
          <Button onClick={() => { openModal(data) }}>
            <Icon name="ellipsis horizontal" />
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  </div>
)

QuizBox.defaultProps = {
  id: '',
  openModal: () => {},
  data: {},
}

QuizBox.propTypes = {
  id: PropTypes.number,
  openModal: PropTypes.func,
  data: PropTypes.object,
}

export default QuizBox

