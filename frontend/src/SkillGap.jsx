import { useState } from "react";

function SkillGap() {

    const [skills, setSkills] = useState("");
    const [role, setRole] = useState("");
    const [result, setResult] = useState(null);


    const analyzeSkills = async () => {

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/skill-gap",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        skills: skills,
                        target_role: role
                    })
                }
            );


            const data = await response.json();

            console.log(data);

            setResult(data);


        } catch(error) {

            console.log("Error:", error);

        }

    };


    return (

        <div className="card">

            <h2>🎯 Skill Gap Analyzer</h2>


            <input
                type="text"
                placeholder="Your skills (Python SQL React)"
                value={skills}
                onChange={(e)=>setSkills(e.target.value)}
            />


            <br/><br/>


            <input
                type="text"
                placeholder="Target role (Data Analyst)"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
            />


            <br/><br/>


            <button onClick={analyzeSkills}>
                Analyze Skills
            </button>


            {
                result &&

                <div>

                    <h3>
                        Match Score: {result.match_percentage}%
                    </h3>


                    <h4>Missing Skills:</h4>

                    {
                        result.missing_skills.map(
                            (skill,index)=>(
                                <p key={index}>
                                    ❌ {skill}
                                </p>
                            )
                        )
                    }


                    <h4>Learning Suggestions:</h4>

                    {
                        result.recommendations.map(
                            (item,index)=>(
                                <p key={index}>
                                    ✅ {item}
                                </p>
                            )
                        )
                    }

                </div>
            }


        </div>

    );
}

export default SkillGap;