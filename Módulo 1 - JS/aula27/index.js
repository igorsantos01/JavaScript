let speed = 0;

do {
  alert(`A velocidade do veículo é ${speed} KM/H`);
  speed -= 20;
} while (speed > 0);
alert(`A velocidade final: ${speed} km/h`);
