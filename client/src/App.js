// import './App.css';
// import { useGetCourseQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from './service/course';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import AdministrtaionPage from './pages/AdministrationPage/AdministrationPage';

function App() {
  // const { data: dataById } = useGetCourseByIdQuery('8ff96270-062b-11ee-9d7e-1399db26ca6d')
  // const [createCourse] = useCreateCourseMutation()
  // const [updateCourse] = useUpdateCourseMutation()
  // const [deleteCourse] = useDeleteCourseMutation()

  // function sendData() {
  //   createCourse({ email: 'test@gmail', pwd: "password" })
  // }

  // function updateData() {
  //   updateCourse('5e488a40-088c-11ee-a0cb-9541bccd7d5a', {email: 'a@gmail', pwd: 'ppaass'} )
  // }

  // function deleteData() {
  //   deleteCourse('8f91d6c0-088b-11ee-99f9-abfbf8bf9e9a')
  // }

  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/admin' element={<AdministrtaionPage></AdministrtaionPage>}></Route>
    </Routes>
    // <div>
    //   {dataById ? <h2>{JSON.stringify(dataById)}</h2> : null}
    //   <button onClick={sendData}>send data</button>
    //   <button onClick={updateData}>update data</button>
    //   <button onClick={deleteData}>delete data</button>
    // </div>
  );
}

export default App;
