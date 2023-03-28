import styles from "./Publications.module.scss";
import CreateEditPublication from "components/Profile/Publications/CreateEditPublication";
import PublicationsList from "components/Profile/Publications/PublicationsList";


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