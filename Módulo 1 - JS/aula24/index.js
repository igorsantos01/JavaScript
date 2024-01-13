let speed = 80;

while (speed > 0) {
  alert(`O carro está a ${speed} KM/H`);
  speed -= 20;
  alert("Diminuindo 20 KM/h");
  if (speed === 40) {
    break;
  }
}
alert("O carro parou");
