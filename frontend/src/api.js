const API="http://127.0.0.1:8000";



export async function apiRequest(
url,
options={}
){


const token =
localStorage.getItem("token");



return fetch(

API+url,

{

...options,


headers:{


"Content-Type":
"application/json",


Authorization:
`Bearer ${token}`


}

}

);


}