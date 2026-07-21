import { useState } from "react";
import "./App.css";


function InterviewCoach(){


const questions=[

"Tell me about yourself.",

"Explain your biggest project.",

"What are your strengths?",

"Why should we hire you?",

"Explain React lifecycle."

];



const [answers,setAnswers] = useState({});


const [feedback,setFeedback] = useState({});





const handleAnswer=(index,value)=>{


setAnswers({

...answers,

[index]:value

});


};





const getFeedback=(index)=>{


if(!answers[index])
{

setFeedback({

...feedback,

[index]:

"⚠️ Please write your answer first."

});


return;

}





setFeedback({

...feedback,


[index]:

`🤖 AI Feedback:

Your answer is good.

Improve it by adding:

✔ Real project examples

✔ Technical details

✔ Results or achievements

✔ Clear explanation structure`

});



};






return(


<div className="interview-page">


<h1>
🎤 AI Interview Coach
</h1>



<p>
Practice interviews and improve your answers with AI feedback.
</p>




<div className="question-grid">


{

questions.map((question,index)=>(


<div 
className="question-card"
key={index}
>



<h3>

Question {index+1}

</h3>



<p>

{question}

</p>





<textarea


placeholder="Write your answer..."


value={answers[index] || ""}


onChange={(e)=>
handleAnswer(index,e.target.value)
}


/>





<div className="score-box">

AI Score:

<strong>

85%

</strong>


</div>





<button

className="feedback-btn"

onClick={()=>getFeedback(index)}

>

Get Feedback

</button>







{

feedback[index] &&

(

<div className="feedback-box">

{feedback[index]}

</div>

)

}





</div>


))


}



</div>



</div>


);


}


export default InterviewCoach;