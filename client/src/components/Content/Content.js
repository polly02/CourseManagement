import ContentItem from "./ContentItem"
import { useGetCourseQuery } from '../../service/course'
import { Pagination } from "@mantine/core";
import React, { useState, useRef, useEffect } from "react";
import style from './style.module.css'


function Content({ searchString }) {
    const { data: dataAll } = useGetCourseQuery()

    console.log(dataAll);

    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSizeRef = useRef(6);

    const filterCourse = () => {
        if (!searchString) return dataAll ?? [];
        return dataAll?.filter(({ course }) =>
            course.toLowerCase().includes(searchString.toLowerCase())
        );
    };

    const pagesList = filterCourse().slice(
        (currentPage - 1) * pageSizeRef.current,
        currentPage * pageSizeRef.current
    );

    useEffect(() => {
        setList(filterCourse());
        setCurrentPage(1);
    }, [searchString, dataAll]);

    return (
        <>
            <div className={style.cards}>

                {pagesList?.map((item) => (
                    <ContentItem
                        course={item.course}
                        info={item.info}
                        location={item.location}
                    ></ContentItem>
                ))}
            </div>
            <Pagination className={style.pages}
                total={Math.ceil(list.length / pageSizeRef.current)}
                value={currentPage}
                onChange={(page) => setCurrentPage(page)}
                position="center"
            />
        </>
    )
}

export default Content