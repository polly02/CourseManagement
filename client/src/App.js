import './App.css';
import { useGetCourseQuery, useGetCourseByIdQuery } from './service/course';

function App() {
  const { data: dataAll } = useGetCourseQuery()
  const { data: dataById } = useGetCourseBQuery()

  return (
    <div>
      {dataAll ? <h2>{JSON.stringify(dataAll)}</h2> : null}
      {dataById ? <h2>{JSON.stringify(dataById)}</h2> : null}
    </div>
  );
}

export default App;
