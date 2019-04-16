function allApartments(allapt){
	const url = allapt ? "/apartments?all=true" : "/apartments"
  return fetch(url)
  .then((response)=>{
    if(response.status === 200){
      return response.json()
    } else {
      throw "Bad response"
    }
  })
}

export { allApartments }