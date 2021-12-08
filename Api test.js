console.log('Hello Gilmartins')
console.log('Welcome to us!')

var x = function(){
  return "HI";
}


var D = function (){

  document.getElementById("demo").innerHTML = Date();
}

var Tem = function (){
    let text = "1 celsius"
    document.getElementById("demo").innerHTML = text;
  }

  var Or = function (){
    let text = "Luton";
    document.getElementById("demo").innerHTML = text;
  }
  
  var Em = function (){
    let text = "07470788191"
    document.getElementById("demo").innerHTML = text; 
  }

  var GB = function (){
      window.history.back();
      document.getElementById("demo").innerHTML = text;
  }
   var CI = function (){
    localStorage.setItem("Time", Date.now());
    localStorage.setItem("Jobs", "Vlad");
    localStorage.setItem("Orders", 4);
    localStorage.setItem("Persons", 2);
    localStorage.setItem("Hours", 13 );
  }

  var DEL = function (){
    localStorage.clear
}

  var I = function (){
    var l, i;
    document.getElementById("demo").innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);
    document.getElementById("demo").innerHTML += x + "<br>";
  }
}


//Token Dynamics


// var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2dpbG1hcnRpbnNkZXZlbG9wbWVudC5jcm0xMS5keW5hbWljcy5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81YjM3MDY4OC1iMTc5LTQ1YzYtODI3MS02MjhiNjRjMDM3MjMvIiwiaWF0IjoxNjM4ODcwNjAzLCJuYmYiOjE2Mzg4NzA2MDMsImV4cCI6MTYzODg3NDUwMywiYWlvIjoiRTJaZ1lQaHFwSGt5dXNEOHZVdkZncDhGc3ozekFBPT0iLCJhcHBpZCI6ImQ1ZDM1ZjQ1LWU1MDItNGJhNi05MGE5LThhMGU3MmE1ZjY4MyIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzViMzcwNjg4LWIxNzktNDVjNi04MjcxLTYyOGI2NGMwMzcyMy8iLCJvaWQiOiI0MGVlODEwZC04NTUyLTRkYjEtYmMyZi0zNDdmZTg4YzY4NjEiLCJyaCI6IjAuQVNBQWlBWTNXM214eGtXQ2NXS0xaTUEzSTBWZjA5VUM1YVpMa0ttS0RuS2w5b01nQUFBLiIsInN1YiI6IjQwZWU4MTBkLTg1NTItNGRiMS1iYzJmLTM0N2ZlODhjNjg2MSIsInRpZCI6IjViMzcwNjg4LWIxNzktNDVjNi04MjcxLTYyOGI2NGMwMzcyMyIsInV0aSI6Ii1SR01LN3ptVWtXVzI1a2hXYThMQUEiLCJ2ZXIiOiIxLjAifQ.r8vlrMBH24cqB9f-QGt56jz8zRT_Nz0bovpWWuaZnjtKHZMJLSEka3omUJZdpg3O9H2uzgwGAOBYUq48mSqzEMC1MSKReAASvk6CJayctNsRsqgTT02evo16ZtddQUKRY95JN7Jx8lDCUeKydpGu1dFXaSgtqpt7uen1A_0LrvCtdaJdjWGweVCjazHNJHZw_o3YJxz-mDb1e1zUWmJtplFBV3SCUi4xeR-azD_M_TQ1TrRz16iLky8_heeMhgAM09frNisr6rdCBX3Qx6nNyCsnj5OkYv668kb4lCMaJKlRwamZpcTKIGItwqVqAUFIQ6ss0Fk9FeHJMExDSisX9Q" ;

// var data = "";

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// var data = '';
// var config = {
//   method: 'get',
//   url: 'https://gilmartinsdevelopment.crm11.dynamics.com/api/data/v9.2/msdyn_workorders',
//   headers: { 
//     'Authorization': 'Bearer ' + token, 
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//  var x = response.data
//  console.log(response.data)
//   console.log(response.data["value"])
  
//  x["value"].forEach((element,i) => {
//   console.log(element["gilm_preapprovedamount_base"])
//     });
    

// })


// .catch(function (error) {
//  console.log(error);
// });