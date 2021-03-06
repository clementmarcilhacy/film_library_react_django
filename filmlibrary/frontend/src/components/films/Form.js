import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addFilm } from '../../actions/films'

export class Form extends Component {
  state = {
    name: '',
    year: '',
    message: ''
  }

  static propTypes = {
    addFilm: PropTypes.func.isRequired
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    const { name, year, message } = this.state
    const film = { name, year, message }
    this.props.addFilm(film)
    this.setState({
      name: '',
      year: '',
      message: ''
    })
  }

  render() {
    const { name, year, message } = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Film</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              type="number"
              name="year"
              onChange={this.onChange}
              value={year}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFilm })(Form)
