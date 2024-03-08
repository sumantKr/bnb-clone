import { BookingFilter, Logo, UserAvatar, UserMenu } from '..'

function NavBar() {
    return (
        <nav className='fixed w-[100vw] py-3 px-2 md:px-6 border-b shadow-sm flex items-center justify-between'>
            <Logo />
            <BookingFilter />
            <UserMenu />
            <UserAvatar />
        </nav>
    )
}

export default NavBar