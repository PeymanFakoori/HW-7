
function mergeObjects(array1,array2){
    let userData=[]
    for(let i=0; i<array1.length; i++) {
        userData.push({
         ...array1[i], 
         ...(array2.find((item) => item.uid === array1[i].uid))}
        );
      }return userData;
};

console.log(mergeObjects(personData,additionalPersonData));
// console.table(mergeObjects(personData,additionalPersonData));