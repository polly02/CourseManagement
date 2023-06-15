import style from './style.module.css'


function ContentItem({ course, info, location }) {

    return (
        <div className={style.wrapper}>
            <h2>{course}</h2>
            <p>{info}</p>
            <div className={style.location}>
                <div className={style.icon}></div>
                <p>{location}</p>
            </div>
        </div>
    )
}

export default ContentItem