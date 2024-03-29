import { NavLink } from 'react-router-dom'

type LinkProps = {
    children: string | any,
    location: string,
    className: string,
}
export default function CustomLink({children, location, className}: LinkProps) {
  return <NavLink to={location} className={className}>
    {children}
  </NavLink>
}
