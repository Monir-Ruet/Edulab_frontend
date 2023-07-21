"use client"

import * as React from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"

interface collapseProps {
    title: String,
    selectedChapter: String,
    items: {
        title: string,
        titleId: string
    }[]
}

const Collapse: React.FC<collapseProps> = ({
    title,
    items,
    selectedChapter
}) => {
    const [isOpen, setIsOpen] = React.useState(title == selectedChapter)
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} >
            <CollapsibleTrigger className="w-full">
                <div className="flex flex-row justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                    <div className="font-serif">
                        {title}
                    </div>
                    <div className="flex">
                        {
                            !isOpen ? <BiChevronDown className="h-4 w-4 " /> : <BiChevronUp className="h-4 w-4" />
                        }
                    </div>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    items.map((list, index) => {
                        return (
                            <li className="before:bg-[#c00] before:content-[''] before:w-[2px] before:top-0 before:bottom-[0px] before:left-[5px]  font-serif font-light flex flex-row justify-end transition-colors hover:text-foreground/80 text-foreground/60 relative m-0  pl-[10px]" key={index}>
                                <Link href={list.titleId} className="w-11/12">
                                    {list.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </CollapsibleContent>
        </Collapsible>
    )
}





export default Collapse