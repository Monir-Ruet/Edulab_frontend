import Sidebar from "@/components/Post/Postsidebar/Sidebar"
import Postbody from "@/components/Post/PostBody/Postbody"


export default function Post() {
    return (
        <div className="container flex flex-row justify-between">
            <Sidebar className="w-2/12 m-4" />
            <Postbody className="w-8/12 m-4" />
            <div className="w-2/12 m-4">
                Right
            </div>
        </div>
    )
}