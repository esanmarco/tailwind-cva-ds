import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps {
    children: React.ReactNode;
    onClick: (data: any) => void | Promise<void>;
}

const buttonStyles = cva('btn rounded-md capitalize', {
    variants: {
        color: {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            error: 'btn-error',
            success: 'btn-success',
            warning: 'btn-warning',
            info: 'btn-info',
            active: 'btn-active',
        },
        outlined: {
            true: 'btn-outline',
        },
        fullWidth: {
            true: 'w-full',
        },
        size: {
            small: 'btn-sm',
            medium: '',
            large: 'btn-lg',
        },
    },
    defaultVariants: {
        color: 'primary',
        fullWidth: false,
        size: 'medium',
        outlined: false,
    },
});

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
