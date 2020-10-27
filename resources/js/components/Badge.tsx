import React from "react";

export type BadgeColors = 'primary' | 'secondary' | 'warning' | 'info' | 'danger';

export type BadgeProps = {
    color?: BadgeColors;
}

const classes: { [id in BadgeColors]: string } = {
    primary: 'text-primary-100 bg-primary-600',
    secondary: 'text-secondary-100 bg-secondary-600',
    warning: 'text-yellow-100 bg-yellow-600',
    info: 'text-blue-100 bg-blue-600',
    danger: 'text-red-100 bg-red-600',
};

export const Badge: React.FC<BadgeProps & React.HTMLAttributes<HTMLSpanElement>> = ({color = 'primary', children, ...rest}) => {
    return <span
        {...rest}
        className={`py-1 px-3 text-sm ${classes[color]} font-medium rounded-full`}
    >
        {children}
    </span>
};