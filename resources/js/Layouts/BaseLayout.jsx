import React from 'react';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '@/Components/Dashboard/Sidebar';

console.log('test');

const BaseLayout = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}

export default BaseLayout
