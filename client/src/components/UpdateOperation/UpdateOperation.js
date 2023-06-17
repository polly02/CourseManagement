import { Input, Button } from '@mantine/core';
import style from './style.module.css'
import { useUpdateCourseMutation } from '../../service/course'
import { useState } from 'react';

function UpdateOperation() {
    const [updateCourse] = useUpdateCourseMutation()
    const [value, setValue] = useState( { course: "", info: "", location: "", })

    function sendRequest() {
        updateCourse( value)
    }

    function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <div className={style.wrapper}>
            <Input name="id" placeholder="ID" onChange={changeInputValue} />
            <Input name="course" placeholder="Course" onChange={changeInputValue} />
            <Input name="info" placeholder="Information" onChange={changeInputValue} />
            <Input name="location" placeholder="Location" onChange={changeInputValue} />
            <Button onClick={sendRequest}>Применить</Button>
        </div>
    )
}

export default UpdateOperation