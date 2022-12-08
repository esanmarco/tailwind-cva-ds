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
interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {
}
declare const Button: ({ color, onClick, fullWidth, children, outlined, disabled, size, ...props }: Props) => JSX.Element;

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
    color?: "info" | "success" | "warning" | "error" | null | undefined;
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

declare const menuStyles: (props?: ({
    align?: "start" | "end" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface menuProps extends VariantProps<typeof menuStyles> {
    items: Array<{
        label: string;
        onClick: (data: any) => void;
    }>;
    trigger: React.ReactDOM;
}
declare const Menu: ({ items, trigger, ...props }: menuProps) => JSX.Element;

declare const badgeStyles: (props?: ({
    color?: "primary" | "secondary" | "accent" | "ghost" | null | undefined;
    outlined?: boolean | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends VariantProps<typeof badgeStyles> {
    children: React.ReactNode;
}
declare const Badge: ({ color, children, outlined, size, ...props }: BadgeProps) => JSX.Element;

declare const alertStyles: (props?: ({
    color?: "info" | "error" | "warning" | "success" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface AlertProps extends VariantProps<typeof alertStyles> {
    children: React.ReactNode;
}
declare function Alert({ color, children, ...props }: AlertProps): JSX.Element;

declare const inputStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    color?: "info" | "success" | "warning" | "error" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends VariantProps<typeof inputStyles> {
    placeholder?: string;
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    value?: string | number;
    defaultValue?: string | number;
    helperText?: string;
}
declare const Input: ({ type, placeholder, value, defaultValue, helperText, color, size, ...props }: InputProps) => JSX.Element;

export { Alert, AlertProps, Avatar, AvatarProps, Badge, BadgeProps, Button, Input, InputProps, Menu, Modal, ModalProps, Props, Select, SelectProps, menuProps };
