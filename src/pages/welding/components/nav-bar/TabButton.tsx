import { NavLink } from "react-router-dom";

interface Props {
    url: string;
    title: string;
    end?: boolean;
}

export default function TabButton({ url, title, end = false }: Props) {
    return (
        <NavLink
            to={url}
            end={end}
            className={({ isActive }) => `flex-1 px-4 h-12 flex items-center text-lg justify-center font-mediumtransition-colors transition-colors bg-white
             ${isActive ? "text-primary" : "text-label"}`}>
            {title}
        </NavLink>
    );
}