let heros = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder women", "flash"],
];

for (let i = 0; i < heros.length; i++) {
  console.log(heros[i]);
  for (let j = 0; j < heros[i].length; j++) {
    console.log(heros[i][j]);
  }
}

// another try
let students = [
  ["avneesh", 99],
  ["mohit", 98],
  ["harsh", 99],
];

for(let i = 0 ; i < students.length; i++){
    console.log(`index is = ${i}`);
    for(let j = 0; j < students[i].length; j++){
        console.log(students[i][j]);
    }
}