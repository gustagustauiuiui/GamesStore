import { useState } from 'react';
import ApplicationLogo from '@/Components/Atomos/ApplicationLogo';
import Dropdown from '@/Components/Atomos/Dropdown';
import NavLink from '@/Components/Atomos/NavLink';
import ResponsiveNavLink from '@/Components/Atomos/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Organismos/Header';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main>{children}</main>
        </div>
    );
}
