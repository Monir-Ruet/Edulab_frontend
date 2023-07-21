import Sidebar from "@/components/Post/Postsidebar/Sidebar"
import Postbody from "@/components/Post/PostBody/Postbody"
import { useRouter } from "next/navigation"


export default function Post() {
    const path = useRouter()
    console.log(path)
    return (
        <div className="container flex flex-row justify-between">
            <Sidebar className="w-2/12 m-4 hidden lg:block" />
            {/* <Postbody className="w-full lg:w-8/12 m-4" /> */}
            <div className="w-2/12 m-4 hidden lg:block">
                Right
            </div>
        </div>
    )
}