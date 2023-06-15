import { useState } from "react"
import CreateOperation from "../../components/CreateOperation/CreateOperation"
import UpdateOperation from "../../components/UpdateOperation/UpdateOperation"
import DeleteOperation from "../../components/DeleteOperation/DeleteOperation"
import Header from "../../components/Header/Header"
import style from "./style.module.css"

function AdministrtaionPage() {
    const [operation, setOperation] = useState('create')

    return (
        <>
            <Header></Header>
            <div className={style.navigation}>
                <p onClick={() => setOperation('create')}>Создание</p>
                <p onClick={() => setOperation('update')}>Обновление</p>
                <p onClick={() => setOperation('delete')}>Удаление</p>
            </div>
            {operation == 'create' ? <CreateOperation /> :
                operation == 'update' ? <UpdateOperation /> :
                    operation == 'delete' ? <DeleteOperation /> : null}
        </>
    )
}

export default AdministrtaionPage