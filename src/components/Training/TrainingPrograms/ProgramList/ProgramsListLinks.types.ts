import {Program} from "../../../../redux/training-reducer.types";


export type ProgramsListLinksProps = {
    programs: Program[]
    getProgram: (item: Program) => void

}