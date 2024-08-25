import * as studentService from "../../../service/StudentService"

export const getAllStudentByMiddleware = (name) => async (dispatch) => {
    //     Call API
    const data = await studentService.getAllStudents(name);
    dispatch({
        type: "GET_ALL_STUDENT",
        payload: data
    })
}

export const saveStudentByMiddleware = (student) => async (dispatch) => {
    await studentService.saveStudent(student);
    // Lấy lại dữ liệu vừa mới thêm mới để có thêm id. Còn nếu dùng hiện tại thì không có id
    dispatch({
        type: "ADD_STUDENT",
        payload: student
    })
}