import {User} from "store/users-slice.types";

export type UserInfoProps = {
    profile: User | undefined;
    id: string | undefined;
}