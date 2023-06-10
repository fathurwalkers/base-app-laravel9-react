import React from 'react';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/Components/Dashboard/Sidebar';

export default function DashboardLayout() {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
