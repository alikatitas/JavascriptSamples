// // Promise ile yapım

// document.querySelector('#btn').addEventListener('click',()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res=>res.json())
//     .then(post=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then(res=>res.json())
//         .then(data=>console.log(data))
//     })
// }
// )
 
// Async - Await ile yapım
document.querySelector('#btn').addEventListener('click',async ()=>{
    const post  = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()
    const comments= await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(comments)
})