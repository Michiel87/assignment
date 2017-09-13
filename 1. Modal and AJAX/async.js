getData = () => {
  get = (url) => {
    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = () => {
        if (xhttp.status == 200){
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = () => {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  let object = get("http://localhost:8080/better-call-saul.json")

  let episodeFormat = (episode) => {
    return `<li class="episode">
              <div class="episode-thumbnail">
                <img src=${episode.image.medium} alt="thumb">
              </div>
              <div class="episode-info">
                <h3>${episode.name.toUpperCase()} - SEASON: ${episode.season}, EPISODE: ${episode.number}</h3>
              <hr>
                ${episode.summary}
              </div>
            </li>`
  }

  object.then((result) => {
    document.getElementById('title').innerHTML = result.name.toUpperCase();
    document.getElementById('modelBody').innerHTML = result._embedded.episodes
      .map((episode) => {
        return episodeFormat(episode)
      })
      .join('')
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
};
