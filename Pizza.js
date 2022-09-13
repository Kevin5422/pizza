const Pizza = [
  {
    nombre: "pizza1",
    id: 1,
    ingredientes: ["tomate", "cebola"],
    precio: 532,
  },
  {
    nombre: "pizza2",
    id: 2,
    ingredientes: ["cebolla", "harina", "sal", "queso"],
    precio: 803,
  },
  {
    nombre: "pizza3",
    id: 3,
    ingredientes: ["tomate", "mozzarella"],
    precio: 760,
  },
  {
    nombre: "pizza4",
    id: 4,
    ingredientes: ["tomate", "harina", "sal", "huevos"],
    precio: 650,
  },
  {
    nombre: "pizza5",
    id: 5,
    ingredientes: ["tomate", "ajo"],
    precio: 870,
  },
  {
    nombre: "pizza6",
    id: 6,
    ingredientes: ["tomate", "ajo", "limon", "queso"],
    precio: 695,
  },
];
 
for (let i = 0; i < Pizza.length; i++) {
    if(Pizza[i].id % 2 != 0){console.log(Pizza[i].nombre)}
}
 


for (let i = 0; i < Pizza.length; i++) {
  if (Pizza[i].precio < 600) {
    console.log("si, se da,  es " + Pizza[i].nombre + Pizza[i].precio) 
  } 
} 


for (let i = 0; i < Pizza.length; i++) {
    console.log("la " + Pizza[i].nombre + " sale " + Pizza[i].precio)
} 


for (let i = 0; i < Pizza.length; i++) {
    console.log(Pizza[i].nombre + " los ingredientes son ")
    for (let o = 0; o < Pizza[i].ingredientes.length; o++) {
        console.log( Pizza[i].ingredientes[o])
    }
} 