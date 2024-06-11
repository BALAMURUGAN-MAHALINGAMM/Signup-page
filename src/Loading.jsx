import { useLocation } from "react-router-dom"
function Loading(){
    const data = useLocation()
    return(
        <div className="bg-black h-72 mt-10  ">
        <h1 className="text-3xl text-white text-center p-20"> Hello {data.state.user}</h1>
        <p className="text-2xl  text-white text-center ">Thanks for  Login this page</p>
        </div>
    )
}
export default Loading