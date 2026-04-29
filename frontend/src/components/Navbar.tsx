'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <Link href="/" className="nav-logo">MEET<span>.</span>PULSE</Link>
            <ul className="nav-links">
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#how">Proceeeess</Link></li>
                <li><Link href="/analytics">Analytics</Link></li>
                <li><Link href="/calendar">Calenderr</Link></li>
                <li><Link href="/generator">Generators</Link></li>
            </ul>
            <Link href="/generator" className="nav-cta"><span>Generate Now ↓</span></Link>
        </nav>
    );
};
