import { Input, Button, Select } from '@mantine/core';
import style from './style.module.css'
import { useGetCourseByIdQuery, useGetCourseQuery, useDeleteCourseMutation } from '../../service/course'
import { useState } from 'react';

function DeleteOperation() {
    const { data: courses } = useGetCourseQuery()
    const [deleteCourse] = useDeleteCourseMutation()

    const [value, setValue] = useState({id: ""})
    const { data: foundCourse } = useGetCourseByIdQuery(value?.id)


    function sendRequest() {
        deleteCourse(value.id)
        window.location.reload()
    }

    return (
        <div className={style.wrapper}>
            <div className={style.before}>
                <Select
                    name="id"
                    placeholder="Pick one"
                    data={courses?.map((el) => el.id) ?? []}
                    onChange={(event) => setValue({ ...value, id: event })}
                />
                <div>
                    <Input value={foundCourse?.course} disabled></Input>
                    <Input value={foundCourse?.info} disabled></Input>
                    <Input value={foundCourse?.location} disabled></Input>
                </div>
            </div>
            <div>
                {/* <Input name="id" placeholder="ID" onChange={changeInputValue} /> */}
                <Button onClick={sendRequest}>Применить</Button>
            </div>
        </div>
    )
}

export default DeleteOperation