let py = 1;
for (let i=0; i<10; i++) {
  let factor1 = 2**0.5;
  let factor2 = (2+factor1)**0.5;
  py *= (factor2/2);
  factor1 = factor2;
}
//the loop yields 2/pi;
py = ((1/py)/2)
createDiv(py);
