// Singleton constractor se object bnega toh Sigleton rahega agr literals se bnega then no singleyon.
const mysym = Symbol("mykey1")  //made this unique by using symbol keyword

// object literals
const Jsuser ={ name : "Malini", age: 22, location: "Jsr", email: "malini@google.com", isloggedIn : false,[mysym]: "mykey1" }
//-----------------------------acess the objects-----------------------------------------------------------------------
//  console.log(Jsuser.email);
//  console.log(Jsuser["email"]);
//  console.log(Jsuser[mysym]);
Jsuser.name = "Shazmin"
//Object.freeze(Jsuser)
Jsuser.name = "meetu"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);

}
Jsuser.greetingtwo = function(){
    console.log("kasie ho aap !");
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());