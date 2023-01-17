import {Program} from 'store/training-slice.types';


export type ProgramsListLinksProps = {
    programs: Program[]
    getProgram: (item: Program) => void

}