'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <Link href="/" className="nav-logo">MEET<span>.</span>PULSE</Link>
            <ul className="nav-links">
                <li><Link href="/#features">Featu</Link></li>
                <li><Link href="/#how">Process</Link></li>
                <li><Link href="/analytics">Analytics</Link></li>
                <li><Link href="/calendar">Calender</Link></li>
                <li><Link href="/generator">Generator</Link></li>
            </ul>
            <Link href="/generator" className="nav-cta"><span>Generate Now ↓</span></Link>
        </nav>
    );
};
