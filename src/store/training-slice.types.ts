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

export type ExerWiki = {
    nameEn: string
    nameUa: string
    secondaryGroups: [string]
}

export type exerciseWiki = {
    title: string
    exercises: ExerWiki[]
    id: string
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
    exercisesWiki: exerciseWiki[],
    isLoading: boolean,
    error: string,
}
