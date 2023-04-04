import styles from "./Publications.module.scss";
import CreateEditPublication from "./CreateEditPublication";
import PublicationsList from "./PublicationsList";


const Publications = () => {

    return (
        <div className={styles.publications}>
            <CreateEditPublication/>
            <PublicationsList/>
        </div>
    )
}

export default Publications;