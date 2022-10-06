async function validate(token) {
    return fetch('http://0.0.0.0:4000/validate', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token)
    })
      .then(data => data.json())
   }

export default validate;