import "./App.css";


function Jobs() {


const jobs = [

{
title:"Frontend Developer",
company:"Google",
location:"Bangalore",
skills:"React, JavaScript, CSS",
match:"92%"
},

{
title:"Python Developer",
company:"Microsoft",
location:"Hyderabad",
skills:"Python, FastAPI, SQL",
match:"88%"
},

{
title:"AI Engineer",
company:"OpenAI",
location:"Remote",
skills:"Python, Machine Learning, AI",
match:"85%"
},

{
title:"Data Analyst",
company:"Amazon",
location:"Chennai",
skills:"Python, Excel, SQL",
match:"82%"
}

];



const applyJob = (job) => {


alert(

`✅ Application Started!

Position: ${job.title}

Company: ${job.company}

Location: ${job.location}

Your application has been added to your tracker.`

);


};



return (


<div className="jobs-page">


<h1>
💼 AI Job Recommendations
</h1>


<p className="jobs-subtitle">

Jobs recommended based on your skills and career goals.

</p>




<div className="jobs-grid">


{

jobs.map((job,index)=>(


<div className="job-card" key={index}>



<div className="company-logo">

{job.company.charAt(0)}

</div>



<h2>

{job.title}

</h2>



<h3>

{job.company}

</h3>



<p>

📍 {job.location}

</p>



<p>

🛠 {job.skills}

</p>




<div className="match-box">


<span>
Match Score
</span>


<strong>

{job.match}

</strong>


</div>





<button

className="apply-btn"

onClick={()=>applyJob(job)}

>

Apply Now

</button>




</div>


))

}



</div>


</div>


);


}


export default Jobs;