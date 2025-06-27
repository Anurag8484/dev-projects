import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

import "../userHome.css"
export function UserHome(){
    const[courses,setCourses] = useState([])
    const[purchasedCourses,setPurchasedCourses] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true);
    const[viewPurchased,setViewPurchased] = useState(false)
    const navigate = useNavigate();

    async function purchaseCourse(courseId){
        try {
          const token = localStorage.getItem("token");
          console.log(token);
          console.log("check 1");
          
          const res = await axios.post(
            `http://localhost:3001/users/courses/${courseId}`,{},
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (res.status) {
            setLoading(true)            
            fetchCourses();
          } else {
            setError("Currently there are 0 courses.");
          }
        } catch (error) {
          setError(error.response?.data?.error || error.message);
        } finally {
          setLoading(false);
        }
    }
 


    const fetchCourses = async () => {
      const token = localStorage.getItem("token");
      try {
          const[coursesRes, purchasedRes] = await Promise.all([
              axios.get("http://localhost:3001/users/courses", {headers: { authorization: token,},}),
              axios.get("http://localhost:3001/users/purchasedCourses", {headers: { authorization: token,},})
          ])
          const courseAll = coursesRes.data.courses ?? [];
          const pruchaseAll = purchasedRes.data.purchasedCourses ?? [];

          setCourses(courseAll)
          setPurchasedCourses(pruchaseAll)
       
      } catch (error) {
        setError(error.response?.data?.error || error.message);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {

      fetchCourses();
    }, []);

    const purchasedIds = new Set(purchasedCourses.map(c=>c.courseId));


    return (
      <>
        <div className="pageTitle">
          <h2>Courses Available</h2>
          {viewPurchased ? (
            <button onClick={() => setViewPurchased(false)}>
              View All Courses
            </button>
          ) : (
            <button onClick={() => setViewPurchased(true)}>
              View Purchased Courses
            </button>
          )}
        </div>

        {viewPurchased ? (
          <div className="course-container">
            {loading ? (
              <h3>Loading.....</h3>
            ) : (
              purchasedCourses.map((course) => (
                <div key={course.courseId} className="courseCard">
                  <h4>Name: {course.title}</h4>
                  <p>Description: {course.description}</p>
                  <p>Price: {course.price}</p>
                  <div>
                    {purchasedIds.has(course.courseId) ? (
                      <p className="coursePurchase">Purchased</p>
                    ) : (
                      <button onClick={() => purchaseCourse(course.courseId)}>
                        Purchase
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="course-container">
            {loading ? (
              <h3>Loading.....</h3>
            ) : (
              courses.map((course) => (
                <div key={course.courseId} className="courseCard">
                  <h4>Name: {course.title}</h4>
                  <p>Description: {course.description}</p>
                  <p>Price: {course.price}</p>
                  <div>
                    {purchasedIds.has(course.courseId) ? (
                      <p className="coursePurchase">Purchased</p>
                    ) : (
                      <button onClick={() => purchaseCourse(course.courseId)}>
                        Purchase
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

       
      </>
    );
}