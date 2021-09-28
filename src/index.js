import axios from 'axios';
axios
  .get(process.env.REACT_APP_MOCK_SERVER)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(process.env.REACT_APP_MOCK_SERVER)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
