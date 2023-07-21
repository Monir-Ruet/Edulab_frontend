"use client"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { LuX } from "react-icons/lu"
import { useEditorStore } from "@/zustand/store"

const initial = {
    computer: ['Binary Search', 'Segment Tree', 'Dsu', 'Convex Hull', 'Lichao']
}

function Editorcontroller() {
    const [category, setcategory] = useState(initial);
    const [categoryName, setcategoryName] = useState('')
    // const { selectedCategory, tags } = useEditorStore()
    const [selectedTags, setselectedTags] = useState<string[]>([])
    const [tags, settags] = useState<string[]>([]);
    const addPost = () => {
        console.log(useEditorStore.getState().editorText);
        console.log(categoryName);
        console.log(tags);
    }
    return (
        <div>
            <Card className="">
                <CardHeader>
                    <CardTitle className="text-md">Create project</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button variant={"outline"} className="w-full text-xs">Save</Button>
                    <div className="my-2">
                        Status <Badge variant="secondary">Draft</Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="bg-[#2185D0] text-white w-full text-xs" onClick={addPost}>Submit For Review</Button>
                </CardFooter>
            </Card>
            <Card className="my-2">
                <CardHeader>
                    <CardTitle className="text-md">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <Select onValueChange={(value) => {
                        setcategoryName(value);
                        Object.entries(category).map(key => {
                            if (key[0] === value) {
                                setselectedTags(key[1]);
                            }
                        })
                    }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                Object.keys(category).map((key, index) => {
                                    return (
                                        <SelectItem value={key} key={index}>{key}</SelectItem>
                                    )
                                })
                            }
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>
            <Card className="my-2">
                <CardHeader>
                    <CardTitle className="text-md">Tags</CardTitle>
                </CardHeader>
                <CardContent>
                    <Select onValueChange={(value) => {
                        setselectedTags(
                            selectedTags.filter((val) => {
                                return val != value
                            })
                        )

                        settags([...tags, value])
                    }}>
                        <SelectTrigger className="w-full focus:outline-none">
                            <SelectValue placeholder="Select Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                selectedTags.map((value) => {
                                    return (
                                        <SelectItem value={value} key={value}>{value}</SelectItem>
                                    )
                                })
                            }
                        </SelectContent>
                    </Select>
                    <div className="mt-2">
                        {
                            tags.map((tag, i) => {
                                return (
                                    <Badge className="m-1" key={i}>
                                        {tag}
                                        <LuX className="ml-2 hover:text-red-500" onClick={() => {
                                            useEditorStore.setState({
                                                tags: (
                                                    tags.filter((value) => {
                                                        return value != tag;
                                                    }))
                                            })
                                            selectedTags.push(tag);
                                        }} />
                                    </Badge>
                                )
                            })
                        }
                    </div>
                    <Button variant={"outline"} className="my-2">Add</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Editorcontroller