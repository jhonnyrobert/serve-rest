import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    // 80% das requisições devem obter sucesso
    'http_req_failed{scenario:default}': ['rate<0.2'],
    // 95% das requisições devem ser menor que 5s
    'http_req_duration{scenario:default}': ['p(95)<5000'],
  },
};

export default function () {
  http.get('http://localhost:3000/produtos');
  sleep(1);
}
