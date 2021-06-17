import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Movie extends Component {
  

    render() {
        return (
            <div>

                {this.props.movieData.map((value) => {
                    return (
                        <Card border="light" style={{ width: '50rem' }}     >
                            <Card.Text>
                                Movie Title: " {value.title}"
                            </Card.Text>
                          
                          
                        </Card>
                    )
                })
                }
            </div >
        )
    }
}

export default Movie