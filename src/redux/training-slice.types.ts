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

export interface TrainingState {
    programs: Program[],
    exercisesWiki: exerciseWiki[],
    isLoading: boolean,
    error: string,
}
