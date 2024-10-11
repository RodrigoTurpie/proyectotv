import React from 'react'
import { useParams } from 'react-router-dom'

const SearchChannel = () => {
    const {search} = useParams('')

  return (
    <h1>SearchChannel {search}</h1>
  )
}

export default SearchChannel