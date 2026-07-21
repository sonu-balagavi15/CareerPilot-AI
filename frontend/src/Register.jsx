import {useState} from "react";
import "./App.css";
import { apiRequest } from "./api";

function Register({setPage}){


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const register=async()=>{


await apiRequest(
"/register",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
email,
password

})

});


alert(
"Account Created Successfully"
);


setPage("login");


};



return(

<div className="auth-page">


<div className="auth-card">


<div className="auth-logo">
✨
</div>


<h1>
Create Account
</h1>


<p>
Join CareerPilot AI today
</p>



<input

placeholder="Full Name"

onChange={(e)=>setName(e.target.value)}

/>



<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button

className="auth-btn"

onClick={register}

>

Register

</button>



<p>

Already have account?

<span

className="auth-link"

onClick={()=>setPage("login")}

>

 Login

</span>

</p>


</div>


</div>

);

}


export default Register;