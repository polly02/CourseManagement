import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import style from './style.module.css'

function HomePage(){
    return(
        <>
        <Header></Header>
        <Search></Search>
        <Content></Content>
        </>
    )
}

export default HomePage