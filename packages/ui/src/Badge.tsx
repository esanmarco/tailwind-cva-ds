import { cva, VariantProps } from 'class-variance-authority';

const badgeStyles = cva('', {
    variants: {
        color: {
            primary: 'badge-primary',
            secondary: 'badge-secondary',
            accent: 'badge-accent',
            ghost: 'badge-ghost',
        },
        outlined: {
            true: 'badge-outline',
        },
        size: {
            small: 'badge-sm',
            medium: '',
            large: 'badge-lg',
        },
    },
    defaultVariants: {
        color: 'primary',
        outlined: false,
        size: 'medium',
    },
});

interface BadgeProps {
    children: React.ReactNode;
}

export interface Props extends BadgeProps, VariantProps<typeof badgeStyles> {}

export const Badge = ({ color, children, outlined, size, ...props }: Props) => {
    return (
        <span {...props} className={`badge ${badgeStyles({ color, outlined, size })}`}>
            {children}
        </span>
    );
};
