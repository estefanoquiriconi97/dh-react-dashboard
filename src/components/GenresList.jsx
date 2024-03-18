import React, { Component } from 'react'
import { GenreCard } from './GenreCard'

export class GenresList extends Component {
  constructor() {
    super()
    this.state = {
      genresList: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/genres')
      .then((res) => res.json())
      .then((genres) => {
        this.setState({
          genresList: genres.data,
        })
        console.log(genres.data)
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className='card shadow mb-4'>
        <div className='card-header py-3'>
          <h5 className='m-0 font-weight-bold text-gray-800'>
            Genres in Data Base
          </h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            {this.state.genresList.map((genre) => {
              return <GenreCard {...genre} key={genre.id} />
            })}
          </div>
        </div>
      </div>
    )
  }
}