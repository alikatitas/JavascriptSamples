// AJAX ile veri alma
function prepareUrl(url,id){
    if (id==null || id=="") {
        return url
    }
    return `${url}?postId=${id}`
}

function getComments(url, id) {
    let newUrl=prepareUrl(url,id)
    const xhr=new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{
        if (xhr.readyState==4 && xhr.status==200) {
            console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open("GET",newUrl)
    xhr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments",null)
