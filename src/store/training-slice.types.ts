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

export type Program = {
    id: string
    title: string
    typeOf: string
    days: Day[]
    comments: Comment[]
}

export interface TrainingState {
    programs: Program[],
    isLoading: boolean,
    error: string,
}
