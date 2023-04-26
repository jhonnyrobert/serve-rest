import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {

  stages: [
    { duration: '2m', target: 100 }, // Rampa de subida para 100 VUs em 2 minutos
    { duration: '5m', target: 100 }, // Teste de carga constante com 100 VUs por 5 minutos
    { duration: '3m', target: 400 }, // Teste de pico constante com 400 VUs por 3 minutos
    { duration: '2m', target: 0 }, // Rampa de descida para 0 VUs em 2 minutos
  ],
  thresholds: {
    http_req_duration: ['p(95)<300000'], // 95% das requisições devem ser menores que 5min (300000ms)
    'checks{type:success}': ['rate>0.8'], // 80% das requisições devem obter sucesso
  },
};

export default function () {
  const response = http.get('http://localhost:3000/produtos');
  
  check(response, {
    'success': (r) => r.status === 200,
  });

  sleep(1);
}
