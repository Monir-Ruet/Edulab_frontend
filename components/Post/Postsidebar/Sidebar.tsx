"use client"

import * as React from "react"
import Link from "next/link"

interface SidebarProps {
    posttitle: string,
    subject: {
        name: string,
        post: {
            title: string,
            titleId: string,
            priority: number
        }[]
    }
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({
    subject,
    posttitle,
    className
}) => {
    const post = subject.post
    // post.sort((a, b) => {
    //     return a.priority > b.priority ? 1 : -1
    // })
    console.log(posttitle)
    return (
        <div className={className}>
            <h1 className="truncate">{subject.name}</h1>
            <ul className="list-none pl-[30px] mt-[2px] w-full flex flex-col justify-end text-ellipsis">
                {
                    post.map((list, index) => {
                        return (
                            <li className="flex pl-0 hover:text-blue-200 flex-col justify-center relative w-full mb-0 before:content-[''] before:absolute before:left-[-16px] before:border-l-2 before:border-black dark:before:border-white before:h-full before:w-[2px] first:before:top-[10px] last:before:h-[6px]" key={index}>
                                <svg className="absolute ml-[-20px] w-[20px] fill-black dark:fill-white float-left pr-[10px]" aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
                                <Link href={list.titleId} className={(list.title == posttitle ? "underline text-blue-500" : "text-foreground ") + " font-light font-serif text-sm md:text-base w-11/12 truncate "}>
                                    {list.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}





export default Sidebar