import { useEffect,useState } from "react"
import axios from "axios"
import "../userHome.css"
export function UserHome(){
    const[courses,setCourses] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchCourses = async()=>{
            try {
                const token = localStorage.getItem('token')
                console.log("checkpoint 1")
                const res = await axios.get(
                    "http://localhost:3001/users/courses",
                    {
                        headers: {
                            authorization: token
                        },
                    }
                );
                console.log("checkpoint 2")
                console.log(res)
                if(res.status){
                    console.log("res ok")
                    setCourses(res.data.courses);
                }else{
                    setError("Currently there are 0 courses.");
                }
            } catch (error) {
                setError(error.response?.data?.error || error.message);
            }finally{
                setLoading(false)
            }
        };

        fetchCourses();
    },[]);


    return (
      <>
        <div className="pageTitle">
          <h2>Courses Available</h2>
        </div>

        <div className="course-container">
          {(loading) ? (
            <h3>Loading.....</h3>
          ) : (
            courses.map((course)=>(

                
                <div key={course.courseId} className="courseCard">
                <h4>Name: {course.title}</h4>
                <p>Description: {course.description}</p>
              <p>Price: {course.price}</p>
              <div className="cardFooter">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
        ))
            
          )}
        </div>
      </>
    );
}