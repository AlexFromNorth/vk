import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Dispatch, SetStateAction } from "react";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export const timeCreated = (time:any) => {
    return `
    ${new Date().getFullYear()}.${String(new Date().getMonth()).padStart(2, "0")}.${String(new Date().getDay()).padStart(2, "0")} 
    ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")} 
    `
  }

export interface IUser {
    id: number
    avatar: string
    name: string
    isInNetwork?: boolean
}

export interface IPost {
    author: IUser
    createdAt: string
    content: string
    images?: string[]
}

export interface IAddPost{
    setPosts: TypeSetState<IPost[]>
}

export interface IMenuItem {
    title: string
    link: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
}