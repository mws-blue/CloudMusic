import request from "@/utils/request"

export function getSwaper(){
    return new request({
        url:"/banner"
    })
}
export function musicList(){
    return new request({
        url:"/personalized",
        params:{
            limit:10
        }
    })
}