"use client"

import * as React from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface collapseProps {
    title: String
    listitems: String[],
}

const Collapse: React.FC<collapseProps> = ({
    title,
    listitems,
}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Collapsible>
            <CollapsibleTrigger className="w-full">
                <div className="flex flex-row justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                    <div className="font-bold">
                        {title}
                    </div>
                    <div className="flex">
                        {
                            !isOpen ? <BiChevronDown className="h-6 w-6 " /> : <BiChevronUp className="h-6 w-6" />
                        }
                    </div>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    listitems.map((list) => {
                        return (
                            <li className="flex flex-row justify-end list-none transition-colors hover:text-foreground/80 text-foreground/60" key={list as string}>
                                <div className="w-11/12">
                                    {list}
                                </div>
                            </li>
                        )
                    })
                }
            </CollapsibleContent>
        </Collapsible>
    )
}





export default Collapse