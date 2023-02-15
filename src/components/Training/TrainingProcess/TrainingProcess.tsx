import {auth} from "config/config";
import {useAuthState} from "react-firebase-hooks/auth";


const TrainingProcess = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <>
            training calendar
        </>
    )
}

export default TrainingProcess;