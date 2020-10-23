export default {
   playCount(count){
      if(count < 10000) {
         return count
      }
      return (count/10000).toFixed(0) + "万"
   }
}
