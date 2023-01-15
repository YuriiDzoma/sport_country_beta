import {AddComment, Program} from "../../../../../store/training-reducer.types";


export type ProgramExpandCommentsProps = {
    program: Program
    addComment: (comment: string, programId: number) => AddComment
}