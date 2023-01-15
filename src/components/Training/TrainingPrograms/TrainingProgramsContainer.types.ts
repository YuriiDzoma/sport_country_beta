import {AddComment, AddProgram, EditProgram, Program} from "redux/training-reducer.types";

export type MapStateToProps = {
    programs: Program[]
}

export type MapDispatchToProps = {
    addProgram: (values: Program) => AddProgram
    addComment: (comment: string, programId: number) => AddComment
    editProgram: (programId: number, values: Program) => EditProgram
}

export type OwnProps = {

}

export type TrainingProgramsContainerProps = MapStateToProps & MapDispatchToProps & OwnProps