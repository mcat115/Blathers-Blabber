import React, { useState, useEffect } from "react"
import ReviewList from "./reviews/ReviewList"

const AnimalShow = (props) => {

  const [animal, setAnimal] = useState({
    name: "",
    body: "",
    rating: 0,
    photo_path: "",
    reviews: []
  })

  const fetchAnimal = async () => {
    try {
      let animalId = props.match.params.id
      const response = await fetch(`/api/v1/animals/${animalId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setAnimal({
        ...responseBody.animal,
        ["reviews"]: responseBody.reviews
      })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchAnimal()
  }, [])

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-6">
          <img className="animal-photo" src={animal.photo_path.url} alt="Photo"/>
          <h1>{animal.name}</h1>
          <p>{animal.body}</p>
          <div className="card ratings-container">
            <p>The Blabber average animal rating:</p>
            <p>{animal.rating}</p>
          </div>
        </div>
        <div className="cell small-12 medium-6">
          <ReviewList reviews={animal.reviews}/>
        </div>
      </div>
    </div>
  )
}

export default AnimalShow