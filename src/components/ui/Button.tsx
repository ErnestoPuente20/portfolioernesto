import {type ReactNode, type ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    className?: string
    size?: 'sm' | 'default' | 'lg'
}

export default function Button({className = '', size = 'default', children}: ButtonProps) {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary/90 text-primary-foreground hover:bg-primary shadow-lg shadow-primary/25 hover:shadow-primary/40"

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

    return (
        <button className={classes}>
            <span className='relative flex items-center justify-center gap-2'>{children}</span>
        </button>
    )
}
