import { Input, Button } from '@mantine/core';
import style from './style.module.css'
import { useDeleteCourseMutation } from '../../service/course'
import { useState } from 'react';

function DeleteOperation() {
    const [deleteCourse] = useDeleteCourseMutation()
    const [value, setValue] = useState("")

    function sendRequest() {
        deleteCourse(value)
    }

    function changeInputValue(event) {
        setValue(event.target.value)
    }
    return (
        <div className={style.wrapper}>
            <Input name="id" placeholder="ID" onChange={changeInputValue} />
            <Button onClick={sendRequest}>Применить</Button>
        </div>
    )
}

export default DeleteOperation