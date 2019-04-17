// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'

let createApartment = function(apartment) {
	return fetch(BASE + '/apartments', {
		body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}


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

let deleteApartment = (id) => {
    return fetch(`${BASE}/apartments/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

export { 
	allApartments,
	createApartment,
	deleteApartment
	}