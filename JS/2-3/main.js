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
update({uid:1, firstName:'Payman',lastName:"Fakoori", city:'Rasht', age:31})
update({uid:17, firstName:'Soheyl', city:'Babol', age:71})