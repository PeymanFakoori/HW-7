// console.log(userData);
// *******************************



function read(userData) {
    console.log(userData)
}
// console.log("***Read***");
// read(userData);




// *******************************





function creat(input){
function Creator(uid ,firstName, lastName,position,city){
    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.city = city;
}
let newdata = new Creator(input)
for (const element in userData) {
    if (userData[element].uid === newdata.uid) throw new Error('enterd uid is exist')  
}userData.push(newdata)
console.log(userData);
}
creat(10 ,"moein", "lastmasoodi","harki","unja")





// *******************************

function update(updatInfo){
    const updated = userData.find(function(element){
        return element.uid === updatInfo.uid
    })
    if(!updated){
        throw new Error("Input Does't Match")
    }
    for (const key in updatInfo) {
        updated[key] = updatInfo[key]
    }console.log("** It's Updated **")
    // console.log(updated);
}
// console.log("***Update***");
// update({uid:1, firstName:'Payman',lastName:"Fakoori", city:'Rasht', age:31})
// update({uid:17, firstName:'Soheyl', city:'Babol', age:71})


// *******************************