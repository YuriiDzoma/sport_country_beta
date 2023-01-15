import {AddComment} from "../../../../../../redux/training-reducer.types";


export type CommentsFormProps = {
    programId: number
    addComment: (comment: string, programId: number) => AddComment
}

export type SubmitProps = {
    comment: string
}

export type FormikProps = {
    setSubmitting: (isSubmitting: boolean) => void
    resetForm: () => void
}