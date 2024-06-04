console.log(null > 0);
console.log(null == 0);
console.log(null >=0);

// difference between == and ===
 console.log("2"==2);       //only checks values
console.log('2'===2);       // not only checks values but also the data types.


let userone = {
    email: "user@gmail.com",
    upi: "userone@ybl"
}

let usrtwo = userone
usrtwo.email = "malini@google.com"
console.log(userone);
console.log(usrtwo);