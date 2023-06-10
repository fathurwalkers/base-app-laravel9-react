import React from 'react';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '@/Components/Dashboard/Sidebar';

console.log('test');

const BaseLayout = () => {
    return (
        <>
            <Sidebar />
            <h1>dsdsds</h1>
            {children}
        </>
    );
}

export default BaseLayout
