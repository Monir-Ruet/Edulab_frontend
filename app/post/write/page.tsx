"use client"
import Editor from '@/components/posteditor/editor'
import Editorcontroller from '@/components/posteditor/editorcontroller'
import { useUserStore, useEditorStore } from '@/zustand/store'
import { redirect } from 'next/navigation'
function Write() {
    // if (!useUserStore.getState()?.isauthenticated) {
    //     redirect('/');
    // }
    return (
        <div className='md:container flex flex-row justify-between'>
            <div className='w-full md:w-8/12 lg:w-9/12 m-2'>
                <Editor />
            </div>
            <div className='hidden md:block md:w-4/12 lg:w-3/12 mt-14'>
                <Editorcontroller />
            </div>
        </div>
    )
}

export default Write