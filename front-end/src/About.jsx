import { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAbout(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (!about) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{about.title}</h1>

      <img
        src={about.imageUrl}
        alt="Omer Hayat"
        width="300"
      />

      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default About
