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
export function musicDetail(id){
    return new request({
        url:"/playlist/detail",
        params:{
            id:id
        }
    })
}

export function songsComment(data) {
    return new request({
        url:"/comment/playlist",
        params:data
    })
}

export function getCollector(data){
    return new request({
        url:"/playlist/subscribers",
        params:data
    })
}