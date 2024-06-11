import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {

    const navigate = useNavigate()

    const users = props.users
    const setusers= props.setusers
    const [euser, seteuser] = useState()
    const [epass, setepass] = useState()

    function handleuser(evt) {
        seteuser(evt.target.value)
    }
    function handlepass(evt){
        setepass(evt.target.value)
    }
    function adduser(){
        setusers([...users,{username:euser,password:epass}])
        navigate("/")
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                <p>Signup Here:)</p>
           
            <div className=" flex flex-col gap-2 my-2 ">
                <input type="text" value={euser} onChange={handleuser} className="w-52  border p-1 border-black rounded-md bg-transparent"  placeholder="username"></input>
                <input type="text" value={epass} onChange={handlepass} className="w-52 border p-1 border-black rounded-md bg-transparent"  placeholder="password"></input>
                <input type="text" className="w-52 border  p-1 border-black rounded-md bg-transparent"  placeholder="confirm password"></input>
            <button className="bg-[#FCA205] w-20 p-2 rounded-md" onClick={adduser}>Sign up</button>

            <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
            
            
            </div>
            </div>
        </div>
    )
}
export default Signup