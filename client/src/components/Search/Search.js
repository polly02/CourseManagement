import { IconSearch } from '@tabler/icons-react';
import { Button, Input } from '@mantine/core';
import style from './style.module.css'

function Search() {
    return (
        <div className={style.wrapper}>
            <Input
                icon={<IconSearch />}
                placeholder="Введите название курса"
                rightSection={
                    <Button className={style.btnSearch}>Поиск</Button>
                }
            />
        </div>
    )
}

export default Search