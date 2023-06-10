import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getCourse: builder.query({
            query: () => `course/`
        }),
        getCourseById: builder.query({
            query: (id) => `course/${id}`
        })
    })
})

export const { useGetCourseQuery, useGetCourseByIdQuery } = courseApi