let pie = 1;
for (let i=0; i<10; i++) {
  let den = i*2 + 3;
  let frac = (1/den);
  if (i%2 ==0)
    pie -= frac;
  else
    pie += frac;
}
pie *= 4;
createDiv(pie);
