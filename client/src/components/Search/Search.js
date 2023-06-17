import { IconSearch } from '@tabler/icons-react';
import { Button, Input } from '@mantine/core';
import style from './style.module.css'
import { useState } from 'react';

function Search({setSearchString}) {
    const [input, setInput] = useState("")

    function SearchInput(){
        setSearchString(input)
    }
    return (
        <div className={style.wrapper}>
            <Input
                icon={<IconSearch />}
                placeholder="Введите название курса"
                rightSection={
                    <Button onClick={SearchInput} className={style.btnSearch}>Поиск</Button>
                }
                onChange={(event) => setInput(event.target.value)}
            />
        </div>
    )
}

export default Search