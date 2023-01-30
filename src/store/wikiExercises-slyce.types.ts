export type exercise = {
    nameEn: string
    nameUa: string
    secondaryGroups: [string]
}

export type muscleGroup = {
    title: string
    exercises: exercise[]
    id: string
}

export interface WikiExercisesState {
    muscleGroups: muscleGroup[],
    isLoading: boolean,
    error: string,
    exercises: exercise[],
}