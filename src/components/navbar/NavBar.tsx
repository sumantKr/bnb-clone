import {  Logo, UserAvatar, UserMenu, BookingFilter } from '..'

function NavBar() {
    return (
        <nav className='fixed w-[100vw] py-3 px-4 lg:px-6 border-b shadow-sm flex items-center justify-between'>
            <Logo />
            <BookingFilter />
            <UserMenu />
            <UserAvatar />
        </nav>
    )
}

export default NavBar