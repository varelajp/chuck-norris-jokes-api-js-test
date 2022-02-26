document.addEventListener('DOMContentLoaded', async() => {
  const jokes = []

  for (let joke = 0; joke < 15;) {
    // WARNING: fetching a less than 15 jokes category causes an infinite loop
    // const response = await fetch('https://api.chucknorris.io/jokes/random?category=animal')
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json()
    const [icon_url, id, value] = [data.icon_url, data.id, data.value]

    let repeatedJoke = false
    for (const joke of jokes) {
      if (Object.values(joke).includes(id)) {
        repeatedJoke = true
        break
      }
    }

    if (!repeatedJoke) {
      // jokes.push(data)
      jokes.push({icon_url, id, value})
      joke++
    }// else {
      // console.log('REPEATED JOKE');
    //}
  }

  for (let joke = 0; joke < 15; joke++) {
    document.getElementById('jokes').innerHTML +=
      `<div class="joke">
        Joke ${joke + 1}<br>
        - url: ${jokes[joke].icon_url}<br>
        - id: ${jokes[joke].id}<br>
        - value: ${jokes[joke].value}<br>
      </div>`
  }
  console.log(jokes)
})
