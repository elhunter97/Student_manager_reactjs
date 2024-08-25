import './App.css';
import React, {useEffect} from "react"
import StudentListFunc from "./component/student/StudentListFunc";
import StudentCreate from "./component/student/StudentCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllStudentByMiddleware} from "./component/redux/middleware/StudentMiddleware";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentEditFunc from "./component/student/StudentEditFunc";


function App() {
    const dispatch = useDispatch();
    const students = useSelector(store => store.students)
    useEffect(() => {
        dispatch(getAllStudentByMiddleware(""))
    },[]);
    return (
        <>
            <BrowserRouter>
                <div>
                    <NavLink to="/student">Danh sách</NavLink>
                    <NavLink to="/create">Thêm mới</NavLink>
                    <p>Tổng số học sinh hiện tại {students.length}</p>
                </div>
                <Routes>
                    <Route path="/create" element={<StudentCreate />} />
                    <Route path="/student" element={<StudentListFunc/>} />
                    <Route path="/edit/:id" element={<StudentEditFunc/>} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
