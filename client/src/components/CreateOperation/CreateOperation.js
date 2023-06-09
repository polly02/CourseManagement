import { Input, Button } from '@mantine/core';
import style from './style.module.css'
import { useCreateCourseMutation } from '../../service/course'
import { useState } from 'react';

function CrudOperation() {
    const [createCourse] = useCreateCourseMutation()
    const [value, setValue] = useState({ course: "", info: "", location: "", })

    function sendRequest() {
        createCourse(value)
        window.location.reload()
    }

    function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <div className={style.wrapper}>
            <Input name="course" placeholder="Course" onChange={changeInputValue} />
            <Input name="info" placeholder="Information" onChange={changeInputValue} />
            <Input name="location" placeholder="Location" onChange={changeInputValue} />
            <Button onClick={sendRequest}>Применить</Button>
        </div>
    )
}

export default CrudOperation