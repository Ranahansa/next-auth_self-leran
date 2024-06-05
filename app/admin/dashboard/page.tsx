import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const Dashboard = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='flex-1 bg-gray-100 dark:bg-gray-900'>
                <div className='p-6 grid gap-6'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {['Total Users', 'Total Sales', 'Total Orders', 'Total Revenue'].map((title, index) => (
                            <Card key={index}>
                                <CardHeader className='flex flex-row items-center justify-between pb-2'>
                                    <CardTitle className='text-sm font-medium'>{title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>10</div>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>New {title.toLowerCase()} this month</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className='grid gap-6'>
                        <Card>
                            <CardHeader className='flex flex-row items-center justify-between pb-2'>
                                <CardTitle className='text-sm font-medium'>Recent Sign-ups</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Plan</TableCell>
                                            <TableCell>Date</TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>john@example.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>2022-01-01</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
