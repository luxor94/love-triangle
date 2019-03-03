/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let count=0;
  for(let i=0;i<preferences.length;i++){
   let lover = preferences[i];
   if(lover==i+1) continue;
   let lover2=preferences[preferences[i]-1];
   if(preferences[lover2-1]==i+1){
     count++;
     delete(preferences[i]);
   }
  }
  return count;
};