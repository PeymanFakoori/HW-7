// console.log(userData);
// *******************************
let merged = userData;
function read() {
    return userData
}



function creat(uid ,firstName, lastName,position,city){

    // function Creator(uid ,firstName, lastName,position,city){
    //     this.uid = uid;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.position = position;
    //     this.city = city;
    // }
    const newdata={uid:uid,firstName:firstName,lastName:lastName,position:position,city:city};
    // let newdata = new Creator(uid ,firstName, lastName,position,city)
    for (const element in userData) {
        if (userData[element].uid === newdata.uid) {
            throw new Error('enterd uid is exist')
        }
    }userData.push(newdata)
    
    console.log("**New User Created**");
    
    }
    // creat(10 ,"Payman", "Fakoori","CEO","berlin")
    // creat(3 ,"moein", "lastmasoodi","harki","unja")
    
    // console.log(userData);


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
    // update({uid:1, firstName:'Payman',lastName:"Fakoori", city:'Rasht', age:31})
    // update({uid:17, firstName:'Soheyl', city:'Babol', age:71})


    function remove(input){
        if(isNaN(input))throw new Error("input must be a number")
        let uidList=[]
    for (let index = 0 ; index < userData.length ; index ++) {
        uidList.push(userData[index].uid)
        
    }
    if (!uidList.includes(input)){
        throw new Error("enterd input not exist")
    }
        const result = userData.findIndex(function(element){
            return element.uid === input
        })
       userData.splice(result,1)
    //    console.log(userData);
       console.log("** removed **");
    }
    // remove(5)