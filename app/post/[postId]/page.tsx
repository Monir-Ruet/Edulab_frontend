import axiosClient from "@/lib/axiosClient";
import Image from "next/image";
import Sidebar from "@/components/Post/Postsidebar/Sidebar"
import Postbody from "@/components/Post/PostBody/Postbody"

interface postId {
    postId: string;
}
interface post {
}
async function Post({ params }: { params: postId }) {
    const selectedPost = await (await axiosClient.get(`posts/${params.postId}`)).data
    if (selectedPost && selectedPost[1] == null) {
        return (
            <div className="text-center flex justify-center mt-10">
                <div className="absolute mx-auto">
                    <div className="notFound-img flex justify-center">
                        <Image src="/Illustration.svg" alt="404-error-image" width={200} height={200} />
                    </div>
                    <div className="text-center">
                        <h2>Whoops, that page is gone.</h2>
                        <p>While you're here, feast your eyes upon these popular</p>
                        <p>recommendations for you.</p>
                    </div>
                </div>
            </div>
        )
    }
    const data = selectedPost[1];
    const chapter = data.chapter;
    const subject = chapter.subject;
    const chaptername = chapter.name, subjectname = subject.name, chapters = subject.chapter;
    return (
        <div className="container flex flex-col justify-between md:flex-row">
            <Sidebar selectedChapter={chaptername} chapters={chapters} subject={subjectname} className="w-full md:w-3/12 lg:w-2/12 mt-4 mr-4" />
            <Postbody body={selectedPost[1].body} className="w-full md:w-9/12 lg:w-8/12 mt-4 mx-4" title={selectedPost[1].title} />
            <div className="w-2/12 mt-4 ml-4 hidden lg:block">
                Right
            </div>
        </div>
    )
}

export default Post