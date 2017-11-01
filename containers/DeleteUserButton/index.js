import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { makeEmail } from 'selectors/user'
import {delete_} from 'actions/user'

export class DeleteUserButton extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {step: 0, show: false}
    this.handleChange = this.handleChange.bind(this)
    this.handleFirstStep = this.handleFirstStep.bind(this)
  }

  handleFirstStep () {
    this.setState({step: 1})
  }
  handleChange (e) {
    if (e.target.value === this.props.email) { this.setState({show: true}) } else this.setState({show: false})
  }

  render () {
    return (
      <div className='delete-user-button '>

        {this.state.step === 0 && <button className='button is-danger is-pulled-right' onClick={this.handleFirstStep}>Supprimer mon compte</button>}

        {this.state.step === 1 && <div className='field'>
          <p className='control'>
            <label className='label has-text-danger'>Veuillez saisir ici votre email pour confirmer la suppression du
                  compte</label>
            <div className='control has-icons-left'>
              <input className='input is-danger' type='text' onChange={this.handleChange} />
              <span className='icon is-small is-left'>
                <i className='fa fa-warning' />
              </span>
            </div>
          </p>
        </div>}
        {this.state.show && <div className='field'>
          <p className='control'>
            <button className='button is-danger' onClick={this.props.onDeleteUser}>Supprimer</button>
          </p>
        </div>}

      </div>
    )
  }
}

DeleteUserButton.propTypes = {
  email: PropTypes.func,
  onDeleteUser: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  email: makeEmail()

})

export function mapDispatchToProps (dispatch) {
  return {
    onDeleteUser: (page) => {
      dispatch(delete_(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserButton)
