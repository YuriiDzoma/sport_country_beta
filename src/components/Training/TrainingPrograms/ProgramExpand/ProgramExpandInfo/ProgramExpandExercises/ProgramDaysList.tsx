import ProgramDay from "./ProgramDay/ProgramDay";
import React from "react";
import {ProgramDaysListProps} from "./ProgramDaysList.types";


const ProgramDaysList: React.FC<ProgramDaysListProps> = ({itemDays}) => (
    <div>

        {itemDays.map((day, index) => <ProgramDay key={index} day={day} />

        )}
    </div>
)

export default ProgramDaysList;