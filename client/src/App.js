// import './App.css';
// import { useGetCourseQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from './service/course';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import AdministrtaionPage from './pages/AdministrationPage/AdministrationPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/admin' element={<AdministrtaionPage></AdministrtaionPage>}></Route>
    </Routes>
  );
}

export default App;
