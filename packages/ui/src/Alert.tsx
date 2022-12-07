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

interface AlertProps {
    children: React.ReactNode;
}

export interface Props extends AlertProps, VariantProps<typeof alertStyles> {}

export const Alert = ({ color, children, ...props }: Props) => {
    return (
        <span {...props} className={`alert ${alertStyles({ color })} justify-start`}>
            {children}
        </span>
    );
};
