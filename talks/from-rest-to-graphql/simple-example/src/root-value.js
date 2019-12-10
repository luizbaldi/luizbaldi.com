const musics = require('./datasources/musics')

const rootValue = {
  allMusics: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(musics)
    }, 4000);
  }),
  music: ({ id }) => musics.find(music => parseInt(music.id, 10) === parseInt(id, 10)),
  addMusic: (music) => {
    musics.push(music)
    return music
  }
}

module.exports = rootValue
