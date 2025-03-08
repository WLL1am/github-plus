'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/trpc/react'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type FormInput = {
    repoUrl: string
    projectName: string
    githubToken?: string
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>()
    const createProject = api.project.createProject.useMutation()

    function onSubmit(data: FormInput) {
        createProject.mutate({
            githubUrl: data.repoUrl,
            name: data.projectName,
            githubToken: data.githubToken
        }, {
            onSuccess: () => {
                toast.success('Project created successfully')
                reset()
            },
            onError: () => {
                toast.error('Failed to create project')
            }
        })
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
                    <Button type='submit' disabled={createProject.isPending}>
                        Create Project
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePage