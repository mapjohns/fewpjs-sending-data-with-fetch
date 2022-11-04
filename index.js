// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        let id = document.createElement('h2');
        id.innerHTML = object.id
        document.body.append(id)
      })
    .catch(function(error) {
    let errMessage = document.createElement('h3')
    errMessage.innerHTML = error.message
    document.body.append(errMessage)
    });
}
