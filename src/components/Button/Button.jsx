import classes from './Button.module.css';

export default function Button({ children, isActive, ...props }) {
    return (
        <button
            type="button"
            {...props}
            className={isActive ? `${classes.active}` : ''}
        >
        {children}
    </button>)
}