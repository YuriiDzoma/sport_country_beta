import {exerciseWiki} from "../../../../store/training-reducer.types";

export type MapStateToProps = {
    exercisesWiki: exerciseWiki[]
}

export type MapDispatchToProps = {

}

export type OwnProps = {
    type: string
}

export type ListOfExercisesContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

