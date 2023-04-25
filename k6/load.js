import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '06s',
};

export default function () {
  http.get('http://localhost:3000/produtos');
  sleep(1);

  //docker run -v $(pwd):/k6 -i --network="host" loadimpact/k6 run /k6/load.js
}
