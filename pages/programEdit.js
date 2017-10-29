import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Layout from 'components/Layout'
import Title from 'components/Title'
import ProgramEditForm from 'components/ProgramEditForm'

import { loadProgram, saveProgram, deleteProgram, resetProgram } from 'actions/program'
import { makeLoading } from 'selectors/program'

class ProgramEditPage extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  constructor (props) {
    super(props)
    this.handleSaveProgram = this.handleSaveProgram.bind(this)
    this.handleDeleteProgram = this.handleDeleteProgram.bind(this)
  }

  componentDidMount () {
    if (this.props.id !== 'new') {
      this.props.onLoadProgram(this.props.id)
    } else {
      this.props.onResetProgram()
    }
  }

  handleSaveProgram (values) {
    this.props.onSaveProgram(values)
  }

  handleDeleteProgram () {
    this.props.onDeleteProgram(this.props.id)
  }

  render () {
    if (this.props.loading) return null
    return (
      <Layout>
        <div id='program-edit-page'>
          <Title
            title={this.props.id === 'new' ? 'Ajouter une émission' : 'Modifier l\'émission ' + this.props.id} />
          <section className='section'>
            <div className='container'>
              <ProgramEditForm onSubmit={this.handleSaveProgram} />
              {this.props.id !== 'new' && <button className='button is-danger' onClick={this.handleDeleteProgram}> <i className='fa fa-trash-o' />&nbsp;Supprimer</button>}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

ProgramEditPage.propTypes = {
  id: PropTypes.string,
  loading: PropTypes.bool,
  onSaveProgram: PropTypes.func,
  onLoadProgram: PropTypes.func,
  onDeleteProgram: PropTypes.func,
  onResetProgram: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  loading: makeLoading()
})

export function mapDispatchToProps (dispatch) {
  return {
    onSaveProgram: (data) => {
      dispatch(saveProgram(data))
    },
    onDeleteProgram: (id) => {
      dispatch(deleteProgram(id))
    },
    onLoadProgram: (id) => {
      dispatch(loadProgram(id))
    },
    onResetProgram: () => {
      dispatch(resetProgram())
    }
  }
}

export default withReduxSaga(connect(mapStateToProps, mapDispatchToProps)(ProgramEditPage))
