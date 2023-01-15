

import {
    ADD_COMMENT,
    ADD_PROGRAM,
    AddComment,
    AddProgram,
    EDIT_PROGRAM,
    EditProgram,
    Program,
    Training
} from "./training-reducer.types";



let initialState: Training = {
    programs: [],
    exercisesWiki: [
        {
            id: 1, name: 'Barbell bench press', muscleGroup: 'Pectoral Muscles',
            about: 'The barbell bench press is a classic exercise popular among all weight lifting circles'
        },
        {
            id: 2, name: 'Incline bench press', muscleGroup: 'Pectoral Muscles',
            about: ''
        },
        {
            id: 3, name: 'Breeding dumbbells lying', muscleGroup: 'Pectoral Muscles',
            about: ''
        },
        {
            id: 4, name: 'Pec dec', muscleGroup: 'Pectoral Muscles',
            about: ''
        },
        {
            id: 5, name: 'Leg press', muscleGroup: 'Leg Muscles',
            about: ''
        },
        {
            id: 6, name: 'Dumbbell Hammer', muscleGroup: 'Biceps Muscles',
            about: ''
        },
    ]
}

const trainingReducer = (state = initialState, action: any): Training => {
    switch (action.type) {

        case ADD_PROGRAM: {

            let newProgram = {
                ...action.values,
                id: state.programs.length + 1,
                comments: [],
            };

            return {
                ...state,
                programs: [newProgram, ...state.programs]
            };
        }

        case EDIT_PROGRAM: {
            return {
                ...state,
                programs: state.programs.map((program: any) => {
                    if (program.id === action.programId) {
                        return {
                            ...action.values,
                            id: program.id,
                            comments: program.comments
                        }
                    }
                    return program;
                })
            }
        }

        case ADD_COMMENT: {
            return {
                ...state,
                programs: state.programs.map((program: any) => {
                    if (program.id === action.programId) {

                        let newComment = {
                            id: program.comments.length + 1,
                            comment: action.comment,
                            date: new Date().toLocaleDateString(),
                        };
                        return {
                            ...program,
                            comments: [newComment, ...program.comments]
                        }
                    }
                    return program;
                })
            }
        }

        default:
            return state;
    }
}

export const addProgram = (values: Program): AddProgram => ({type: ADD_PROGRAM, values});
export const addComment = (comment: string, programId: number): AddComment => ({type: ADD_COMMENT, comment, programId});
export const editProgram = (programId: number, values: Program): EditProgram => ({type: EDIT_PROGRAM, programId, values});


//
// export const addNewProgram = (values: any) => async (dispatch: any) => {
//     const response = await setNewProgram(values)
// }

export default trainingReducer;