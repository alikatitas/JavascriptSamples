// function getStudents(url){
//     fetch(url)
//     .then(res=>{
//         return res.json()
//         .then(data=>console.log(data))
//     })
//     .catch(err=>console.log(err))
// }

// getStudents("students.json")


function getUsers(url){
    fetch(url)
    .then(res=>{
        return res.json()
        .then(data=>{
            data.forEach(element => {
                console.log(element.name)
            });
        })
        .catch(err=>console.log(err))
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")


// POST örneği

const data={
    id:6,
    firstName:"Enes",
    lastname:"Katıtaş"
}
function saveStudents(){
    fetch('students.json',{
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify (data)       })
        .then(res=> res.json())
        .then(data=>console.log("success",data))
    }

saveStudents()