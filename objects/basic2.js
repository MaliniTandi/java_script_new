const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name = "chalischor"
tinderUser.isloggedIn = false

//console.log(tinderUser);
const reg ={ email : "malini@gmail.com"
, fullname :{
    userfullname :{
        first: "Shazmin"
        , lastname :"Ali"
    }
}}
//console.log(reg.fullname.userfullname.first);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

user = [
    {
        name : "meetu",
        age:22
    },
    {
        name:"Shazmin",
        age:24
    },
    {
        name:"Shazmin Taj Ali"
        , age:25
    } 
]
user[1].age
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course ={
    coursename : "js in hindi",
    price : "99",
    courseInstructor: "Shazmin"
}
const {courseInstructor : instructor} = course // destructring object
console.log(instructor);