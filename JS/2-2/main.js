function creat(uid ,firstName, lastName,position,city){
    function Creator(uid ,firstName, lastName,position,city){
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.city = city;
    }
    let newdata = new Creator(uid ,firstName, lastName,position,city)
    for (const element in userData) {
        if (userData[element].uid === newdata.uid) {
            throw new Error('enterd uid is exist')
        }
    }userData.push(newdata)
    
    console.log("**New User Created**");
    
    }
    creat(10 ,"Payman", "Fakoori","CEO","berlin")
    creat(3 ,"moein", "lastmasoodi","harki","unja")
    
    console.log(userData);