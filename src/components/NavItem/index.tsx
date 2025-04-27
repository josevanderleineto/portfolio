
import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
    isActive?: boolean;

}
export default function NavItem(props: NavItemInterface)  {  
    return (
        <li className='nav-item'>
        <Link href={props.url} className={`nav-link text-base font-medium text-white hover:text-gray-900 hover:border-b-2 hover:border-blue-500 active:border-b-2 active:border-blue-500 py-1 ${props.isActive ? 'active' : ''}`}>
            {props.label}
        </Link>
        </li>
        
    )
};



