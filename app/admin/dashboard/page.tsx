import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='flex-1 bg-gray-100 dark:bg-gray-900'>
                <div className='p-6 grid gap-6'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <Card>
                            <CardHeader className='flex flex-row items-center justify-between pb-2'>
                                <CardTitle className='text-sm font-medium'>
                                    Total Users
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-2xl font-bold'>10</div>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>New users this month </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className='flex flex-row items-center justify-between pb-2'>
                                <CardTitle className='text-sm font-medium'>
                                    Total Users
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-2xl font-bold'>10</div>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>New users this month </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className='flex flex-row items-center justify-between pb-2'>
                                <CardTitle className='text-sm font-medium'>
                                    Total Users
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-2xl font-bold'>10</div>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>New users this month </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className='flex flex-row items-center justify-between pb-2'>
                                <CardTitle className='text-sm font-medium'>
                                    Total Users
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-2xl font-bold'>10</div>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>New users this month </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard