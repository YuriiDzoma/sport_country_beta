import {Program} from "../../../../store/training-reducer.types";


export type ProgramsListLinksProps = {
    programs: Program[]
    getProgram: (item: Program) => void

}