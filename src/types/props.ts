import { MouseEventHandler } from "react";

export interface ButtonProps {
    btnType?: 'button' | 'submit' | 'reset';
    title: string;
    className?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    link?: string;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}