export default (path, data = {}) => {
  return new Promise((resolve, reject) => {
    fetch(path, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
    })
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        return response;
      } else {
        const errorServer = new Error("Server Error");
        reject(errorServer);
      }
    })
    .then(response => response.json())
    .then(({data}) => {
      resolve(data);
    })
    .catch(err => {
      console.log(err);
      reject(err)
    });
  });
};