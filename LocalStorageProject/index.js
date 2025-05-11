let userList=[]
let getUserList
let nameListDOM=document.querySelector('#nameList')

localStorage.setItem("userList",JSON.stringify(userList))

function Read(){
    nameListDOM.innerHTML=""
    let getUserList=localStorage.getItem("userList",JSON.stringify(userList))
    if (getUserList !=null) {
        if (getUserList.length===0) {
            nameListDOM.innerHTML="There are no any users"
        }else{
            for (let i = 0; i < getUserList.length; i++) {
                nameListDOM.innerHTML +=`
                <div class="user-item">
                <p>
                    <i class="fas fa-user"></i>
                    <span>User : </span>${getUserList[i]}
                </p>
                <div class="buttons">
                    <button class="primary" onclick="Edit(${i})">
                        <i class="fas fa-edit"></i>Edit
                    </button>
                    <button class="primary" onclick="Delete(${i})">
                        <i class="fas fa-delete"></i>Delete
                        </button>
                </div>
            </div>
                `
                
            }
        }
    }
}

// function Edit(item){
// console.log(item)
// }

// function Delete(item){
//     console.log(item)
// }

function Create(){
    const storage=localStorage.getItem("userList")
    let inputText=document.querySelector('#name').value
    if (storage===null) {
        userList.push(inputText)
        localStorage.setItem("userList",JSON.stringify(userList))
    }else{
        userList=localStorage.getItem(JSON.parse("userList"))
        userList.push(inputText)
        localStorage.setItem("userList",JSON.stringify(userList))
    }
}

document.querySelector('#form').addEventListener('submit',(e)=>{
e.preventDefault
Create()
Read()
})

document.addEventListener("DOMContentLoaded",()=>{
    Read()
})