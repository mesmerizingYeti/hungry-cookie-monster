const React = require('react')
const { cookieSounds : cs } = require('../../data')

// Audio tag to play cookie monster sound on page load
module.exports = props => {
  return(
    <audio id="cookie-sound" src={ cs[randInt( 0, cs.length - 1 )] } 
      itemType="audio/mpeg" autoPlay="autoplay"></audio>
  )
}

const randInt = (start, end) => Math.floor(Math.random() * (end - start) + start)