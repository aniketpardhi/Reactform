import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function SignUp() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <>
        <div className="login">
          <div style={{ margin: "auto" }}>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >Sign Up
              
            </h1>
            <form action="POST">
              <div className="input">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>
              <div className="inputbtn">
                <input type="submit" onClick={submit} />
              </div>
            </form>
            <div className="link">
              <h3
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bolder",
                }}
              >
                OR
              </h3>
              <div style={{ textAlign: "center" }}>
                {" "}
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bolder",
                  }}
                >
                  Login Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default SignUp