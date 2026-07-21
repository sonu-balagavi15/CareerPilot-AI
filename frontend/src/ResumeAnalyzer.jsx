import React, {useState} from "react";
import "./App.css";


function ResumeAnalyzer(){


const [file,setFile]=useState(null);

const [result,setResult]=useState(null);


const analyzeResume = async()=>{


const formData=new FormData();


formData.append(
"file",
file
);


const token =
localStorage.getItem("token");


const response = await fetch(

"http://127.0.0.1:8000/analyze-resume",

{

method:"POST",

headers:{

Authorization:
`Bearer ${token}`

},

body:formData

}

);




const data =
await response.json();


setResult(data);


};




return(

<div className="resume-analyzer">


<h1>
📄 AI Resume Analyzer
</h1>


<p>
Upload your resume and get AI-powered feedback.
</p>




<div className="upload-box">


<input

type="file"

accept=".pdf"

onChange={(e)=>
setFile(e.target.files[0])
}

/>



<button

className="upload-btn"

onClick={analyzeResume}

disabled={!file}

>

Analyze Resume

</button>



</div>





{
result &&

<div className="analysis-cards">


<div className="analysis-card">

<h3>
🎯 ATS Score
</h3>

<h2>
{result.ats_score}%
</h2>

</div>



<div className="analysis-card">

<h3>
🛠 Skills Found
</h3>

<p>

{
result.skills.join(", ")
}

</p>


</div>




<div className="analysis-card">

<h3>
💡 Suggestions
</h3>


{

result.suggestions.map(
(item,index)=>(

<p key={index}>
{item}
</p>

)

)

}


</div>



</div>

}



</div>

);


}


export default ResumeAnalyzer;