import { MouseEventHandler } from "react";

export interface ButtonProps {
    btnType?: 'button' | 'submit' | 'reset';
    title: string;
    className?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}