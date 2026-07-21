import { useState } from "react";
import "./App.css";


function Login({setPage}){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const login=async()=>{

try{

const res=await fetch(
"http://127.0.0.1:8000/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
});


const data=await res.json();

localStorage.setItem(
"token",
data.access_token
);


alert("✅ Login Successful");


setPage("home");


}

catch(err){

alert("Login Failed");

}

};


return(

<div className="auth-page">


<div className="auth-card">


<div className="auth-logo">
🚀
</div>


<h1>
Welcome Back
</h1>


<p>
Login to continue your AI career journey
</p>



<input

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>



<button
onClick={login}
className="auth-btn"
>

Login

</button>



<p>

Don't have an account?

<span
className="auth-link"
onClick={()=>setPage("register")}
>
 Create Account
</span>

</p>


</div>


</div>

);

}


export default Login;