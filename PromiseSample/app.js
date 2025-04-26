function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            try {
                    if (xhr.readyState===4 && xhr.status===200) {
                        resolve(JSON.parse(xhr.responseText))
                    }
                }
             catch (error) {
                reject(error)
            }
        }) 
        xhr.open("GET",url)
        xhr.send()
    })
}

function getCommentsByUserId(url){

}

getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data)=>{
console.log(data)
return getCommentsByUserId(`https://jsonplaceholder.typicode.com/users/${data.id}`)
}).then((res)= console.log(res))
.catch((error)=>console.log(error))