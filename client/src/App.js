import './App.css';
import { useGetCourseQuery } from './service/course';

function App() {
  const { data } = useGetCourseQuery()

  return (
    <div>
      {data ? <h2>{JSON.stringify(data)}</h2> : null}
    </div>
  );
}

export default App;
