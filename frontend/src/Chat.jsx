import { useState } from "react";
import "./App.css";


function Chat(){

const [message,setMessage]=useState("");

const [messages,setMessages]=useState([
{
role:"ai",
text:"Hello 👋 I am CareerPilot AI. Ask me anything about jobs, resume, coding or interviews."
}
]);


const sendMessage=()=>{

if(!message) return;


setMessages([
...messages,
{
role:"user",
text:message
},
{
role:"ai",
text:"🤖 I am analyzing your question. I will provide the best career guidance."
}
]);


setMessage("");

};



return(

<div className="chat-page">


<h1>
🤖 CareerPilot AI Assistant
</h1>


<p className="chat-subtitle">
Your personal AI career mentor
</p>



<div className="chat-box">


<div className="messages">


{
messages.map((msg,index)=>(

<div
key={index}
className={
msg.role==="user"
?
"message user-message"
:
"message ai-message"
}
>

{msg.text}

</div>

))

}


</div>



<div className="chat-input">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask career questions..."

/>



<button onClick={sendMessage}>
Send
</button>


</div>


</div>


</div>

);

}


export default Chat;