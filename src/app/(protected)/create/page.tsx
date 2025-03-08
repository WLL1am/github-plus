'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormInput = {
    repoUrl: string
    projectName: string
    githubToken?: string
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>()

    function onSubmit(data: FormInput) {
        window.alert(JSON.stringify(data, null, 2))
        return true
    }
  return (
    <div className='flex items-center gap-12 h-full justify-center'>
        <Image src='/undraw_github.png' alt='' width={350} height={350}/>
        <div>
            <div>
                <h1 className='font-semibold text-2xl'>
                    Link your GitHub Repository
                </h1>
                <p className='text-sm text-muted-foreground'>
                    Enter the URL of your repository to link it to GitHub+
                </p>
            </div>
            <div className='h-4'></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        {...register('projectName', { required: true })}
                        placeholder='Project Name'
                        required
                    />
                    <div className='h-2'></div>
                    <Input 
                        {...register('repoUrl', { required: true })}
                        placeholder='GitHub URL'
                        type='url'
                        required
                    />
                    <div className='h-2'></div>
                    <Input 
                        {...register('githubToken')}
                        placeholder='GitHub Token (Optional)'
                    />
                    <div className='h-4'></div>
                    <Button type='submit'>
                        Create Project
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePage