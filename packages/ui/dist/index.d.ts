import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (data: any) => void | Promise<void>;
}
declare const buttonStyles: (props?: ({
    disabled?: boolean | null | undefined;
    color?: "primary" | "secondary" | "error" | "success" | "warning" | "info" | "active" | null | undefined;
    outlined?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface Props$2 extends ButtonProps, VariantProps<typeof buttonStyles> {
}
declare const Button: ({ color, onClick, fullWidth, children, outlined, disabled, size, ...props }: Props$2) => JSX.Element;

declare const avatarStyles: (props?: ({
    offline?: boolean | null | undefined;
    online?: boolean | null | undefined;
    shape?: "circle" | "square" | "triangle" | "hexagon" | null | undefined;
    size?: "small" | "medium" | "large" | "xsmall" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface AvatarProps extends VariantProps<typeof avatarStyles> {
    img?: string;
    placeholder?: string;
}
declare const Avatar: ({ placeholder, offline, online, shape, size, img, ...props }: AvatarProps) => JSX.Element;

declare const selectStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    outlined?: boolean | null | undefined;
    color?: "primary" | "error" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SelectProps extends VariantProps<typeof selectStyles> {
    options: Array<{
        value: string;
        label: string;
    }>;
    label?: string;
    labelPosition?: 'start' | 'end';
    disabled?: boolean;
}
declare const Select: ({ options, color, size, outlined, disabled, label, ...props }: SelectProps) => JSX.Element;

declare const modalStyles: (props?: ({} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ModalProps extends VariantProps<typeof modalStyles> {
    id: string;
    children: React.ReactNode;
    triggerText?: string;
    triggerIcon?: React.ReactNode;
    submit?: (data: any) => void | Promise<void>;
    submitText?: string;
    submitColor?: 'primary' | 'info' | 'success' | 'warning' | 'error';
}
declare const Modal: ({ id, children, submit, submitColor, submitText, triggerText, triggerIcon, }: ModalProps) => JSX.Element;

declare const badgeStyles: (props?: ({
    color?: "primary" | "secondary" | "accent" | "ghost" | null | undefined;
    outlined?: boolean | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps {
    children: React.ReactNode;
}
interface Props$1 extends BadgeProps, VariantProps<typeof badgeStyles> {
}
declare const Badge: ({ color, children, outlined, size, ...props }: Props$1) => JSX.Element;

declare const alertStyles: (props?: ({
    color?: "info" | "error" | "warning" | "success" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface AlertProps {
    children: React.ReactNode;
}
interface Props extends AlertProps, VariantProps<typeof alertStyles> {
}
declare const Alert: ({ color, children, ...props }: Props) => JSX.Element;

export { Alert, Avatar, AvatarProps, Badge, Button, Modal, ModalProps, Props$2 as Props, Select, SelectProps };
