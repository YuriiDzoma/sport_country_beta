import {getExercises} from "../../../../redux/training-selectors";
import {connect} from "react-redux";
import Exercise from "./Exercise/Exercise";
import React from "react";
import {AppStateType} from "../../../../redux/redux-store";
import {ListOfExercisesContainerProps, MapDispatchToProps, MapStateToProps, OwnProps} from "./ListOfExercises.types";


const ListOfExercisesContainer: React.FC<ListOfExercisesContainerProps> = ({exercisesWiki, type}) => {

    return (
        <div>
            {exercisesWiki.map((item) => {
                if (type === item.muscleGroup) {

                    return <Exercise key={item.id} item={item}/>

                }
            })}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    exercisesWiki: getExercises(state),
})

export default connect <MapStateToProps, MapDispatchToProps, OwnProps, AppStateType>
(mapStateToProps, {})(ListOfExercisesContainer);