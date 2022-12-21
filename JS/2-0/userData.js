
function mergeObjects(personData,additionalPersonData){
    let result=[]
    for(let i=0; i<personData.length; i++) {
        result.push({
         ...personData[i], 
         ...(additionalPersonData.find((item) => item.uid === personData[i].uid))}
        );
      }return result;
};
let userData=mergeObjects(personData,additionalPersonData)
