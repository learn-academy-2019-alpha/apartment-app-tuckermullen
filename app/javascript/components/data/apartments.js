function allApartments(){
  return fetch("/apartments")
  .then((response)=>{
    if(response.status === 200){
      return response.json()
    } else {
      throw "Bad response"
    }
  })
}

export { allApartments }