import {AddComment, Program} from "../../../../../redux/training-reducer.types";


export type ProgramExpandCommentsProps = {
    program: Program
    addComment: (comment: string, programId: number) => AddComment
}