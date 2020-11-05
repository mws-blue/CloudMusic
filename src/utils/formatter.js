export default {
   playCount(count){
      if(count < 10000) {
         return count
      }
      return (count/10000).toFixed(0) + "万"
   },
   formatDate(date){
      const newDate = new Date(date)

      let year = newDate.getFullYear()
      let month = newDate.getMonth()+1
      let day = newDate.getDay()

      return year + "-" + this.formatDigit(month) + "-" + this.formatDigit(day)
   },
   formatDateTime(date){
      const newDate = new Date(date)

      let year = newDate.getFullYear()
      let month = newDate.getMonth()+1
      let day = newDate.getDay()
      let hour = newDate.getHours()
      let mi = newDate.getMinutes()
      let sec = newDate.getSeconds()

      return year + "-" + this.formatDigit(month) + "-" + this.formatDigit(day) + ` ${this.formatDigit(hour)}:${this.formatDigit(mi)}:${this.formatDigit(sec)}`
   },
   formatDigit(num){
      if(num >= 10) return num

      return "0" + num 
   },
   formatTags(arr){
      if(arr.length<=0) return

      let ftags = ''
      for(var i=0;i<arr.length;i++){
         if(i+1 == arr.length){
            ftags+=arr[i]
         }else{
            ftags+=arr[i]+"/"
         }
      }
      return ftags
   }
}

