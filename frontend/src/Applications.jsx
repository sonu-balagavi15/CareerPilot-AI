import { useState } from "react";
import "./App.css";


function Applications(){

const [company,setCompany]=useState("");
const [role,setRole]=useState("");
const [date,setDate]=useState("");
const [status,setStatus]=useState("Applied");


const [applications,setApplications]=useState([]);



const saveApplication=()=>{


if(!company || !role)
{
alert("Please enter company and role");
return;
}



const newApplication={

company,
role,
date,
status

};


setApplications([
...applications,
newApplication
]);



setCompany("");
setRole("");
setDate("");
setStatus("Applied");


};




return(


<div className="applications-page">


<h1>
📋 Application Tracker
</h1>


<p className="application-subtitle">
Track your job applications and interview progress.
</p>




<div className="application-container">



<div className="application-form">


<h2>
➕ Add Application
</h2>


<input

placeholder="Company Name"

value={company}

onChange={(e)=>setCompany(e.target.value)}

/>



<input

placeholder="Job Role"

value={role}

onChange={(e)=>setRole(e.target.value)}

/>



<input

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

/>



<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

>


<option>
Applied
</option>

<option>
Interview
</option>

<option>
Selected
</option>

<option>
Rejected
</option>


</select>



<button

className="save-application"

onClick={saveApplication}

>

Save Application

</button>



</div>





<div className="application-list">



{

applications.length===0 ?

(

<div className="empty-box">

📂 No applications added yet.

</div>

)

:

(

applications.map((app,index)=>(


<div className="application-card" key={index}>


<div>

<h3>

{app.role}

</h3>


<p>
🏢 {app.company}
</p>


<p>
📅 {app.date}
</p>

</div>




<span className={`status ${app.status}`}>

{app.status}

</span>



</div>


))


)



}



</div>



</div>



</div>


);


}


export default Applications;