import classes from './Button.module.css';

export default function Button({ children, onClick, isActive }) {
    return <button type="button" className={isActive ? `${classes.active}` : ''} onClick={onClick}>
        {children}
    </button>
}