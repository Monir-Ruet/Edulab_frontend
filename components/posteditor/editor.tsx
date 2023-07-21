"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MDEditor from '@uiw/react-md-editor';
import { useTheme } from "next-themes";
import { useState } from "react"
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { useEditorStore } from '@/zustand/store'

const Editor = () => {
    const theme = useTheme()
    const { editorText } = useEditorStore()
    return (
        <Tabs defaultValue="edit" className="my-2">
            <TabsList className="grid grid-cols-2 w-64 mx-auto my-0 rounded-none rounded-t">
                <TabsTrigger value="edit">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit" className="my-0">
                <textarea value={editorText} className="w-full m-0 h-[700px] bg-[#ccc] border-1 dark:bg-[#27272A]  p-2 focus:outline-none rounded-lg" onChange={(e: any) => {
                    useEditorStore.setState({ editorText: e.target.value });
                }} />
            </TabsContent>
            <TabsContent value="preview" className="h-fit">
                <div data-color-mode={theme.theme}>
                    <div className="wmde-markdown-var"> </div>
                    <MDEditor.Markdown className="dark:bg-background" source={editorText} rehypePlugins={[rehypeKatex]} remarkPlugins={
                        [remarkGfm, remarkMath]
                    } />
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default Editor;