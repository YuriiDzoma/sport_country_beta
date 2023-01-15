

export type Navbar = {
    id: number
    title: string
    url: string
    logotype: string | null
}

export type Navigation = {
    navbar: Navbar[]
}