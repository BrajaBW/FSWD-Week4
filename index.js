const arrayRandom = [];
for (let i = 0; i < 100; i++) {
  arrayRandom.push(Math.floor(Math.random() * 50));
}

let indeksArrayGenap = [];
let indeksArrayGanjil = [];
for (let i = 0; i < arrayRandom.length; i++) {
  if (i % 2 === 0) {
    indeksArrayGenap.push(i);
  } else if (i % 2 !== 0) {
    indeksArrayGanjil.push(i);
  }
}
let arrayGenap = [];
indeksArrayGenap.forEach((value) => {
  arrayGenap.push(arrayRandom[value]);
});
let arrayGanjil = [];
indeksArrayGanjil.forEach((value) => {
  arrayGanjil.push(arrayRandom[value]);
});

function arrayMax(max) {
  let maksimal = max[0];
  for (let i = 0; i < max.length; i++) {
    if (maksimal < max[i]) {
      maksimal = max[i];
    }
  }
  return maksimal;
}

function arrayMin(min) {
  let minimal = min[0];
  for (let i = 0; i < min.length; i++) {
    if (minimal > min[i]) {
      minimal = min[i];
    }
  }
  return minimal;
}

function arrayTotal(jumlah) {
  let total = jumlah[0];
  for (let i = 1; i < jumlah.length; i++) {
    total += jumlah[i];
  }
  return total;
}

function arrayRata(ratarata) {
  let total = arrayTotal(ratarata);
  let rataR = total / ratarata.length;
  return rataR;
}

function ArrayPerbadinganmin(a,b){
  if(a>b){
console.log(`Nilai Min Lebih Besar dari array genap `)
  }else if(a === b){
    console.log(`Min sama Besar `)
  }else{
    console.log(`Nilai Min Lebih Besar dari array ganjil `)
  }
}
function ArrayPerbadinganMax(a,b){
  if(a>b){
console.log(`Nilai Max Lebih Besar  array genap `)
  }else if(a === b){
    console.log(`Nilai Max sama Besar `)
  }else{
    console.log(`NIlai Max Lebih Besar  array ganjil `)
  }
}
function ArrayPerbadinganTotal(a,b){
  if(a>b){
console.log(`Nilai Total Lebih Besar  array genap `)
  }else if(a === b){
    console.log(`Max sama Besar `)
  }else{
    console.log(`Nilai Total Besar  array ganjil `)
  }
}

function ArrayPerbadinganRata(a,b){
  if(a>b){
console.log(`Nilai Rata - Rata Lebih Besar  array genap `)
  }else if(a === b){
    console.log(`Nilai Rata - Rata sama Besar `)
  }else{
    console.log(`Nilai Rata - Rata Besar  array ganjil `)
  }
}

console.log(`Array dengan jumlah index 100 :`, arrayRandom);
console.log("jumlah arrayrandom:",arrayRandom.length);
console.log("--------------------------------------------------");
console.log(`Array genap dengan jumlah index 50 :`, arrayGenap);
console.log("jumlah arraygenap:",arrayGenap.length);
console.log(`nilai maksimal array genap : `, arrayMax(arrayGenap));
console.log(`nilai Minimal array genap : `, arrayMin(arrayGenap));
console.log(`nilai Jumlah array genap : `, arrayTotal(arrayGenap));
console.log(`nilai rata - Rata array genap : `, arrayRata(arrayGenap));
console.log("--------------------------------------------------");
console.log(`Array ganjil dengan jumlah index 50 :`, arrayGanjil);
console.log("jumlah arrayganjil:",arrayGanjil.length);
console.log(`nilai maksimal array ganjil : `, arrayMax(arrayGanjil));
console.log(`nilai minimal array ganjil : `, arrayMin(arrayGanjil));
console.log(`nilai Jumlah array ganjil : `, arrayTotal(arrayGanjil));
console.log(`nilai rata - Rata array ganjil : `, arrayRata(arrayGanjil));
console.log("--------Perbandingan Nilai Array MaX, MiN, Total, Rata-Rata-----");
ArrayPerbadinganmin(arrayMin(arrayGenap),arrayMin(arrayGanjil))
ArrayPerbadinganMax(arrayMax(arrayGenap),arrayMax(arrayGanjil))
ArrayPerbadinganTotal(arrayTotal(arrayGenap),arrayTotal(arrayGanjil))
ArrayPerbadinganRata(arrayRata(arrayGenap),arrayRata(arrayGanjil))

