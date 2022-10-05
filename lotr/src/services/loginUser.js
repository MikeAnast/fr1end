async function loginUser(credentials) {
    return fetch('http://localhost:4000/login', {
        mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default loginUser;