// Id veya classlardan elementleri yakalıyoruz
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

// todoları tutacağımız dizi
let todos=[]

// Olayların hepsini çalıştırıyoruz
runEvents()

// Eventleri tanımlıyoruz
function runEvents(){
    // Formdaki submit olayına tıklandığında çalışacak fonksiyon
    form.addEventListener("submit", addTodo);
    // Sayfa yüklendiğinde çalışacak fonksiyon
    document.addEventListener("DOMContentLoaded",pageLoaded);
    // Tıklandığında arayüzden Todo silmek için tanımlanan fonksiyon
    secondCardBody.addEventListener("click",removeTodoToUI);
    // Todoların hepsini silen fonksiyon
    clearButton.addEventListener("click",allTodosEverywhere);
    // Arama yapmak için tanımlanan fonksiyon
    filterInput.addEventListener("keyup",filter);
}

// Sayfa yüklendiğinde todos dizisindeki todosları arayüze ekliyoruz
function pageLoaded(){
checkTodosFromStorage()
todos.forEach(function(todo){
    addTodoToUI(todo)
})
}

// Input a girilen bir todoyu almak
function addTodo(e){
    const inputText=addInput.value.trim()
    if (inputText==null || inputText=="") {
        showAlert("warning","Boş bırakılamaz")
    }
    else{
        // Todo Arayüze ekleyeceğimiz fonksiyon
        addTodoToUI(inputText)
        // Todo Storage ekleyeceğimiz fonksiyon
        addTodoToStorage(inputText)
        showAlert("success","Todo Eklendi")
    }

    e.preventDefault()
}

function showAlert(type,message){
    const div=document.createElement("div")
    div.className=`alert alert-${type}`
    div.textContent=message

    firstCardBody.append(div)

    // Mesajın ekranda görünme süresi
    setTimeout(() => {
        div.remove()
    }, 2500);
}

// Storagedeki todoların boş olup olmadığını kontrol etme
function checkTodosFromStorage(){
    // Eğer storagede todo yoksa diziyi boşalt
    if (localStorage.getItem("todos")===null) {
        todos=[]
    }else{
        // todos varsa todosları json olarak diziye aktar
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}

// Arayüze Yeni todo ekleme
function addTodoToUI(newTodo){
    const li=document.createElement('li')
    li.classList='list-group-item d-flex justify-content-between'
    li.textContent=newTodo

    const a=document.createElement('a')
    a.href='#'
    a.className='delete-item'

    const i=document.createElement('i')
    i.className='fa fa-remove'

    a.appendChild(i)
    li.appendChild(a)
    todoList.appendChild(li)

    addInput.value=""
}

// Storage e todo ekliyoruz

function addTodoToStorage(newTodo){
    // Öncelikle storage da todo olup olmadığını kontrol ediyoruz
    checkTodosFromStorage()
    // Gelen todo yu diziye ekliyoruz
    todos.push(newTodo)
    // diziyi storage e ekliyoruz
    localStorage.setItem("todos",JSON.stringify(todos))
}

//Arayüzden todo Silme
function removeTodoToUI(e){
    if (e.target.className==='fa fa-remove') {
        // Ekrandan sil
        const todo= e.target.parentElement.parentElement
        todo.remove()

        // Storageden de todoyu sil
        removeTodoToStorage(todo.textContent)
        showAlert("success","Todo Silindi...")
    }
}

// Storage den todo silme
function removeTodoToStorage(removeTodo){
    checkTodosFromStorage()
    todos.forEach((todo,index)=>{
        if (removeTodo===todo) {
            todos.splice(index,1)
        }
    })
    // Kalan todoları tekrar storage e yaz
    localStorage.setItem("todos",JSON.stringify(todos))
}

// Clear Button ile bütün todoları temizleme
function allTodosEverywhere(){
    const todoListesi= document.querySelectorAll('.list-group-item')
    // Silme işlemi todo olduğunda gerçekleştirilecek
    if (todoListesi.length>0) {
        // Ekrandan silme
        todoListesi.forEach((todo)=>{
            todo.remove()
        })
        // Diziyi boşalt ve storageden sil
        todos=[]
        localStorage.setItem("todos",JSON.stringify(todos))
        showAlert("success","Başarılı bir şekilde silindi")
    }else{
        showAlert("danger","Silmek için en az 1 tane todo olmalıdır")
    }
}

// Todolarda arama yapmak
function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");

    if (todoListesi.length>0) {
        todoListesi.forEach((todo)=>{
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute('style','display:block')
            }else{
                todo.setAttribute('style','display:none !important')
            }
        })
    }else{
        showAlert("warning","Filtreleme yapmak için en az 1 todo olmalıdır")
    }
}