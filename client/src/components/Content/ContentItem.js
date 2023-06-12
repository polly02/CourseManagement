import style from './style.module.css'


function ContentItem() {
    return (
        <div className={style.wrapper}>
            <h2>C# Course</h2>
            <p>В течение курса студенты ознакомятся с ...</p>
            <div className={style.location}>
                <div className={style.icon}></div>
                <p>Минск</p>
            </div>
        </div>
    )
}

export default ContentItem