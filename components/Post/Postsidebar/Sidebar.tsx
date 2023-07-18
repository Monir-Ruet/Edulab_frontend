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
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({
    items,
    className
}) => {
    return (
        <div className={className}>
            {
                menu.map((items, index) => {
                    return (
                        <div key={index}>
                            <Collapse title={items.title} listitems={items.items} />
                        </div>
                    )
                })
            }
        </div>
    )
}





export default Sidebar