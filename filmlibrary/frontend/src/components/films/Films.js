import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFilms, deleteFilm } from '../../actions/films'

export class Films extends Component {
  static propTypes = {
    films: PropTypes.array.isRequired,
    getFilms: PropTypes.func.isRequired,
    deleteFilm: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getFilms()
  }

  render() {
    return (
      <Fragment>
        <h2>Films</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.films.map((film) => (
              <tr key={film.id}>
                <td>{film.id}</td>
                <td>{film.name}</td>
                <td>{film.year}</td>
                <td>{film.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteFilm.bind(this, film.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  films: state.films.films
})

export default connect(mapStateToProps, { getFilms, deleteFilm })(Films)
