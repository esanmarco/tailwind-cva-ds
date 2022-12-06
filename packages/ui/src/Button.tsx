import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps {
    children: React.ReactNode;
    onClick: (data: any) => void | Promise<void>;
}

const buttonStyles = cva(
    'flex flex-row items-center justify-center rounded-md no-underline',
    {
        variants: {
            color: {
                primary: 'hover:bg-primary/[0.75]',
                secondary: 'hover:bg-secondary/[0.75]',
                error: 'hover:bg-error/[0.75]',
            },
            outlined: {
                true: 'border-2',
            },
            fullWidth: {
                true: 'w-full',
            },
            size: {
                small: 'px-2 py-1 text-sm',
                medium: 'px-3 py-2 text-base',
                large: 'px-4 py-3 text-lg',
            },
        },
        compoundVariants: [
            {
                outlined: true,
                className: 'bg-transparent',
            },
            {
                outlined: true,
                color: 'primary',
                className: 'border-primary text-primary hover:bg-primary/[0.25]',
            },
            {
                outlined: true,
                color: 'secondary',
                className: 'border-secondary text-secondary hover:bg-secondary/[0.25]',
            },
            {
                outlined: true,
                color: 'error',
                className: 'border-error text-error hover:bg-error/[0.25]',
            },
            {
                outlined: false,
                color: 'primary',
                className: 'bg-primary text-white',
            },
            {
                outlined: false,
                color: 'secondary',
                className: 'bg-secondary text-white',
            },
            {
                outlined: false,
                color: 'error',
                className: 'bg-error text-white',
            },
        ],
        defaultVariants: {
            color: 'primary',
            fullWidth: false,
            size: 'medium',
            outlined: false,
        },
    }
);

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export const Button = ({
    color,
    onClick,
    fullWidth,
    children,
    outlined,
    size,
    ...props
}: Props) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={buttonStyles({ color, fullWidth, size, outlined })}
        >
            {children}
        </button>
    );
};
