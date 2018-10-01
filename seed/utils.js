const validateActress = (actress, actressDocs) => {
  for(let i = 0; i < actressDocs.length; i++) {
    if (actress === actressDocs[i].name) return actress;
  }
}

const validateGenre = (genre, genreDocs) => {
  for(let i = 0; i < genreDocs.length; i++) {
    if (genre === genreDocs[i].genre) return genre;
  }
}

const formatFilmData = ((filmData, actressDocs, genreDocs) => {
  return filmData.map(film => {
    return {
      ...film,
      lead_actress: validateActress(film.lead_actress, actressDocs),
      genre: validateGenre(film.genre, genreDocs)
    }
  })
})

module.exports = {formatFilmData};