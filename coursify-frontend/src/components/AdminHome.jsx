import { useState, useEffect } from "react";
import "../adminHome.css"
import axios from "axios";

export function AdminHome() {

    const [courses,setCourses] = useState();
    const [loading,setLoading] = useState(true)
    const [addModal,setAddModal] = useState(false)
    const [editModal,setEditModal] = useState(true)

    async function fetchCourses(){
        console.log("check1");
        
        const token = localStorage.getItem("token")
        console.log(token);
        try {
            const res = await axios.get("http://localhost:3001/admin/courses",{
                headers:{
                    authorization: token
                }
            });
            console.log(res);
            if (res.status){
                setCourses(res.data.courses)
            }else{

            }
        } catch (error) {
            console.error(error.response?.data?.error || error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchCourses();
    },[])



    return (
      <>
        <div className="pageTitle">
          <h2>All Courses</h2>
          <button onClick={()=>setAddModal(true)}>Add New Course</button>
        </div>
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
                  <button onClick={()=>{setEditModal(true)}}>
                    Edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {editModal ? (
          <div className="modal">
            <div className="modalContent">
              <div>
                <div className="modalTitle">
                  <h2>Edit Course</h2>
                </div>
                <div className="modalInputs">
                  <p>Title</p>
                  <input type="text" placeholder="Title" />
                  <p>Description</p>
                  <input type="text" placeholder="Description" />
                  <p>Price</p>
                  <input type="text" placeholder="Price" />
                  <p>Published</p>
                  <input type="text" placeholder="Published" />
                </div>
                <div className="modalFooter">
                <button onClick={() => setEditModal(false)}>Edit</button>
                <button onClick={() => setEditModal(false)}>Close </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {addModal ? (
          <div className="modal">
            <div className="modalContent">
              <div>
                <div className="modalTitle">
                  <h2>Add Course</h2>
                </div>
                <div className="modalInputs">
                  <p>Title</p>
                  <input type="text" placeholder="Title" />
                  <p>Description</p>
                  <input type="text" placeholder="Description" />
                  <p>Price</p>
                  <input type="text" placeholder="Price" />
                  <p>Published</p>
                  <input type="text" placeholder="Published" />
                  <p>Image Link</p>
                  <input type="text" placeholder="Image Link" />
                </div>
                <div className="modalFooter">
                <button onClick={() => setEditModal(false)}>Add</button>
                <button onClick={() => setAddModal(false)}>Close </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
}
