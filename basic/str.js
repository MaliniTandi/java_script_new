const name = "Malini"
const repocount = 10

//console.log(name + repocount + "value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("cricket")

console.log(gamename[0]);
console.log(gamename._proto_);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));
 const newstring = gamename.substring(0,3)
console.log(newstring);
const anothername = gamename.slice(-8,4)
console.log(anothername);