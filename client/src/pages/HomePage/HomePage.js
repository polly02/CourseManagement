import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import style from './style.module.css'
import React, { useState} from "react";


function HomePage(){
    const [searchString, setSearchString] = useState("")
    return(
        <>
        <Header></Header>
        <Search setSearchString={setSearchString}></Search>
        <Content searchString={searchString}></Content>
        </>
    )
}

export default HomePage