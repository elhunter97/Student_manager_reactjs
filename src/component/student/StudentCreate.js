import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as studentService from "../../service/StudentService"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {saveStudentByMiddleware} from "../redux/middleware/StudentMiddleware";

function StudentCreate() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        point: 0
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //clean up
            //     Check dữ liệu có thay đổi trong form hay không
            //     Xác nhận nếu người dùng out khỏi component
            //     Nhấn xác nhận thì phá hủy component
            //     Hủy thì giữ lại component
        }
    }, []);

    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")

    }

    const saveStudent = async (value) => {
        // Check validate
        // useRef
        // console.log(value)
        value.point = +value.point
        dispatch(saveStudentByMiddleware(value))
        toast.success("Thêm mới thành công")
        navigate("/student")

    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Thêm Mới Sinh Viên</h4>
                        </div>
                        <div className="card-body">
                            <Formik initialValues={form} onSubmit={saveStudent}
                                    validationSchema={Yup.object(objectValid)}>
                                <Form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Name:</label>
                                        <Field name="name" className="form-control"/>
                                        <ErrorMessage name="name" component="p" className="text-danger"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="address">Address:</label>
                                        <Field name="address" className="form-control"/>
                                        <ErrorMessage name="address" component="p" className="text-danger"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="point">Point:</label>
                                        <Field name="point" type="number" className="form-control"/>
                                        <ErrorMessage name="point" component="p" className="text-danger"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="dob">Date of Birth:</label>
                                        <Field name="dob" type="date" className="form-control"/>
                                        <ErrorMessage name="dob" component="p" className="text-danger"/>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">Thêm mới</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCreate;