import {AddComment, Program} from "../../../../store/training-reducer.types";


export type ProgramExpandProps = {
    programs: Program[]
    programId: number | undefined
    addComment: (comment: string, programId: number) => AddComment
}