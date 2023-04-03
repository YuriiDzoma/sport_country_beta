import styles from "./Publications.module.scss";
import CreateEditPublication from "./CreateEditPublication";
import PublicationsList from "./PublicationsList";


const Publications = () => {

    return (
        <div className={styles.publications}>
            <h3>Publications</h3>
            <CreateEditPublication/>
            <PublicationsList/>
        </div>
    )
}

export default Publications;