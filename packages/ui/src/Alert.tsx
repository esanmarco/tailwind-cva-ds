import { cva, VariantProps } from 'class-variance-authority';

const alertStyles = cva('', {
    variants: {
        color: {
            info: 'alert-info',
            error: 'alert-error',
            warning: 'alert-warning',
            success: 'alert-success',
        },
    },
    defaultVariants: {
        color: 'info',
    },
});

export interface AlertProps extends HTMLSpanElement, VariantProps<typeof alertStyles> {
    children: React.ReactNode;
}

export function Alert({ color, children, ...props }: AlertProps) {
    return (
        <span {...props} className={`alert ${alertStyles({ color })} justify-start`}>
            {children}
        </span>
    );
}
