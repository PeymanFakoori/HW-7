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
remove(5)