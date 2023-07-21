"use client"

import * as React from "react"
import { BiChevronDown } from "react-icons/bi"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Collapse from "./Collapse"

const menu = [
    {
        title: 'Number Theory',
        items: ['a', 'b', 'c', 'd']
    },
    {
        title: 'Searching',
        items: ['cd', 'bs', 'cd', 'dg']
    }
]
interface SidebarProps {
    items?: {
        head: string,
        items: string[]
    }
    selectedChapter: string,
    chapters: [
        {
            name: string,
            priority: Number,
            post: {
                title: string,
                titleId: string
            }[]
        }
    ],
    subject: string,
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({
    selectedChapter,
    chapters,
    subject,
    className
}) => {
    chapters.sort((a, b) => {
        if (a.priority > b.priority) return 1;
        else return -1;
    })
    return (
        <div className={className}>
            {
                chapters.map((items, index) => {
                    return (
                        <div key={index}>
                            {

                                <Collapse selectedChapter={selectedChapter} title={items.name} items={items.post} />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}





export default Sidebar