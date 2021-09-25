import axios from 'axios';
axios
  .get('https://5b454fe7-e619-4f04-88e2-fd600d083186.mock.pstmn.io/location')
  .then(Response => {
    console.log(Response.data);
  })
  .catch(Error => {
    console.log(Error);
  });

axios
  .get('https://5b454fe7-e619-4f04-88e2-fd600d083186.mock.pstmn.io/travel/1')
  .then(Response => {
    console.log(Response.data);
  })
  .catch(Error => {
    console.log(Error);
  });
