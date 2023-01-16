
export const ADD_PROGRAM = 'ADD_PROGRAM'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_PROGRAM = 'EDIT_PROGRAM'

export type Comment = {
    id: number
    comment: string
    date: string
}

export type Exercise = {
    id: number
    name: string
}

export type Day = {
    day: number
    exercises: Exercise[]

}

export type exerciseWiki = {
    id: number
    name: string
    muscleGroup: string
    about: string
}

export type Program = {
    id: number
    title: string
    typeOf: string
    days: Day[]
    comments: Comment[]
}

export type Training = {
    programs: Program[] | any
    exercisesWiki: exerciseWiki[]
}


export type AddProgram = {
    type: typeof ADD_PROGRAM
    values: Program
}

export type AddComment = {
    type: typeof ADD_COMMENT
    comment: string
    programId: number
}

export type EditProgram = {
    type: typeof EDIT_PROGRAM
    programId: number
    values: Program
}