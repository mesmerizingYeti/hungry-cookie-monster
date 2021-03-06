document.addEventListener('click', e => {

  // Add cookie from input
  if (e.target.id === 'cookie-btn') {
    e.preventDefault()
    const cookieName = document.querySelector('#cookie-name').value
    // Check if any input
    if (cookieName) {
      // Add cookie to database
      axios.post('/cookies', {
        name: cookieName
      })
        .then(() => window.location.reload())
        .catch(e => console.error(e))
    }
  }

  // Cookie is devoured
  if (e.target.className === 'cookie') {
    // Update database
    axios.put(`/cookies/${e.target.dataset.cookieid}`, 
      { devoured: 1 })
      .then(() => window.location.reload())
      .catch(e => console.error(e))
  }

})