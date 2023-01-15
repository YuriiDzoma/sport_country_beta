import styles from './Navigation.module.scss'
import { NavbarLink } from './NavbarLink/NavbarLink'

const Navigation = () => {
    const navigation = {
        navbar: [
            {id: 1, title: 'Profile', url: 'profile/', logotype: ''},
            {id: 2, title: 'Training', url: 'training/', logotype: ''},
            {id: 3, title: 'Users', url: 'users/', logotype: ''},
        ]
    }

    return (
        <div className={styles.navigationWrapper}>
            {navigation.navbar.map((item)=> (
                <div key={item.id}>
                    <NavbarLink to={item.url}><span>{item.title}</span></NavbarLink>
                </div>
            ))}
        </div>
    )
}

export default Navigation;