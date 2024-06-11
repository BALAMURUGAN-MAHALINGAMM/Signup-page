import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
const navigate = useNavigate()
    const users = props.users

    const [euser, seteuser] = useState()
    const [epass, setepass] = useState()
    const[ruser,setruser]=useState(true)

    function handleuser(evt) {
        seteuser(evt.target.value)
    }
    function handlepass(evt){
        setepass(evt.target.value)
    }
    function checkuser() {
        var userfound = false
        users.forEach(function(item){
            if(item.username === euser && item.password === epass){
                console.log("login successed")
                userfound = true
                navigate("/loading",{state:{user:euser}} )
            }
            if(userfound===false){
                console.log("login failed")
                setruser(false)
            }
        })

    }




    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                {ruser? <p>I help You to manage your activities after you login:)</p>:<p className="text-red-600">Please Signup before Login!</p>}



                <div className=" flex flex-col gap-2 my-2 ">
                    <input type="text" value={euser} onChange={handleuser} className="w-52  border p-1 border-black rounded-md bg-transparent" placeholder="username"></input>
                    <input type="text" value={epass} onChange={handlepass} className="w-52 border p-1 border-black rounded-md bg-transparent" placeholder="password"></input>
                    <button className="bg-[#8272DA] w-20 p-2 rounded-md" onClick={checkuser}>Login</button>

                    <p>Don't have an account? <Link to={'/Signup'} className="underline">Sign up</Link></p>


                </div>
            </div>
        </div>
    )

}
export default Login