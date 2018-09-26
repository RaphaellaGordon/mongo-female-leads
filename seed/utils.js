const validateActress = (actress, actressDocs) => {
  return actressDocs.find(actressDoc => {
    actressDoc.name === actress
    return actressDoc._id
  })
}

const validateGenre = (genre, genreDocs) => {
  return genreDocs.find(genreDoc => {
    genreDoc.type === genre
    return genreDoc._id
  })
}

const formatFilmData = ((filmData, actressDocs, genreDocs) => {
  return filmData.map(film => {
    return {
      ...film,
      lead_actress: validateActress(film.actress, actressDocs),
      // actress_img: getActressImg(film.actress, actressDocs),
      genre: validateGenre(film.genre, genreDocs)
    }
  })
})

module.exports = {formatFilmData};