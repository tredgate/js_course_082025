// ? Hranaté závorky: Windows: pravý alt + F, pravý alt + G, Mac: option + ú, option + )
const cities = ["Praha", "Brno", "Olomouc", "Plzeň"];

// * Vypíše celý seznam prvků v poli (array)
console.log(cities);

// * Vypíše první prvek z array cities
console.log("První město: " + cities[0]);
console.log("Třetí město: " + cities[2]);

// * Přidání nového prvku do pole
cities.push("Prostějov");
console.log(cities);

// * Procyklení array cyklem for
for (let i = 0; i < cities.length; i++) {
  console.log(`${i + 1}. město: ${cities[i]}`);
}
