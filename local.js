var fn ="";
var ln ="";
var numb ="";
var add ="";
function myFunction() {
    var txt;
    var person1 = prompt("Please enter your First name:", "");
    var person2 = prompt("Please enter your Last name:", "");
    var person3 = prompt("Please enter your Phone Number:", "");
    var person4 = prompt("Please enter your Address:", "");
    if ((person1 != "" && person2 != "" && person3 != "" && person4 != "") && (person1 != null && person2 != null && person3 != null && person4 != null)) {
        fn =person1;
        ln =person2;
        numb = person3;
        add = person4;
        if(fn == '' || ln == '' || numb == '' || add == ''){
            location.reload();
        }
        else{
            save();
        }
    } else {
        document.getElementById("info").innerHTML = 'No User Added';
    }
}
function doFirst(){
    var display_table = document.getElementById("display_data");
    if(localStorage.length != 0){
        display_table.innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Address</th><th>Action</th><th>Action</th><tr>"
    }
    var button = document.getElementById('button');
    button.addEventListener("click",myFunction,false);
    display();
}

function save(){
    // var fn = document.getElementById("fn").value;
    // var ln = document.getElementById("ln").value;
    // var numb = document.getElementById("numb").value;
    // var add = document.getElementById("add").value;
    var obj=[
        ln,numb,add
    ];
    localStorage.setItem(fn, JSON.stringify(obj));
    location.reload();
    
    display();
    
    fn="";
    ln="";
    numb="";
    add="";
    // fn.value="";
    // ln.value="";
    // numb.value="";
    // add.value="";
}
function display(){
    
    var display_data = document.getElementById("display_data");
    // display_data.innerHTML=" ";
    // display_data.innerHTML= "<table>"

    for(var i = 0; i <localStorage.length; i++){
        var a = localStorage.key(i);
        var b = JSON.parse(localStorage.getItem(a));        
        display_data.innerHTML +="<tr><td>"+a+"</td><td>"+b[0]+"</td><td>"+b[1]+"</td><td>"+b[2]+"</td><td><button onclick='cleardata(`"+a+"`)' type='button'>Delete</button></td><td><button type='button' onclick='update(`"+a+"`)'>Update</button></td></tr>";

    } 
   
    // display_data.innerHTML= "</table>"
}
function cleardata(data){
    console.log(data);

    localStorage.removeItem(data);
    
    location.reload();
}
function update(data){
    console.log(data);
    
    var b = JSON.parse(localStorage.getItem(data));  
    console.log(b);

    var person2 = prompt(data+ " please update your Last name:", b[0]);
    var person3 = prompt(data+ " please update your Phone Number:", b[1]);
    var person4 = prompt(data+" please update your Address:", b[2]);
    if (( person2 != null && person3 != null && person4 != null) || ( person2 != "" && person3 != "" && person4 != "")) {
        fn =data;
        ln =person2;
        numb = person3;
        add = person4;
        save();
    } else {
        location.reload();
    }
    
    
}

window.addEventListener("load",doFirst,false)






















// localStorage.clear();
// localStorage.setItem('saif','Hello world');

// var value= localStorage.getItem('saif1');
// console.log(value);
// function save(){
//      var fieldValue = document.getElementById('textfield').value;
//      localStorage.setItem('text',fieldValue);

// }
// function load(){
//     var storedValue = localStorage.getItem('text');
//     if(storedValue){
//         document.getElementById('textfield').value= storedValue;

//     }
// }