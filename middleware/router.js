export default (path, data = {}) => {
  return new Promise((resolve, reject) => {
    fetch(path, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
    })
    .then(response => {
      if (response.status === 200) {
        return response;
      } else {
        reject("Server Error");
      }
    })
    .then(response => response.json())
    .then(({data}) => resolve(data))
    .catch(err => reject(err));
  });
};