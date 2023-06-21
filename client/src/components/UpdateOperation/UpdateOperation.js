import { Input, Button, Select } from '@mantine/core';
import style from './style.module.css'
import { useGetCourseByIdQuery, useGetCourseQuery, useUpdateCourseMutation } from '../../service/course'
import { useState } from 'react';

function UpdateOperation() {
    const { data: courses } = useGetCourseQuery()
    const [updateCourse] = useUpdateCourseMutation()

    const [value, setValue] = useState({ id: "", course: "", info: "", location: "", })
    const { data: foundCourse } = useGetCourseByIdQuery(value?.id)

    function changeValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    function sendRequest() {
        updateCourse(value)
        window.location.reload()
    }

    return (
        <div className={style.wrapper}>
            <div className={style.before}>
                <Select
                    name="id"
                    label="До"
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
                <p>После</p>
                <Input name="course" placeholder="Course" onChange={changeValue} />
                <Input name="info" placeholder="Information" onChange={changeValue} />
                <Input name="location" placeholder="Location" onChange={changeValue} />
                <Button onClick={sendRequest}>Применить</Button>
            </div>
        </div>
    )
}

export default UpdateOperation