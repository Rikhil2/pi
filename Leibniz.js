let time = parseInt(prompt("How many iterations? "));
let pie = 1;
for (let i=0; i<time; i++) {
  let den = i * 2 + 3;
  if ((i % 2) == 0) {
    pie -= (1/den);
  } else {
    pie += (1/den);
  }
}
pie *= 4;
