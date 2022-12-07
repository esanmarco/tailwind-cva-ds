import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface ButtonProps {
    children: React.ReactNode;
    onClick: (data: any) => void | Promise<void>;
}
declare const buttonStyles: (props?: ({
    color?: "primary" | "secondary" | "error" | "success" | "warning" | "info" | "active" | null | undefined;
    outlined?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {
}
declare const Button: ({ color, onClick, fullWidth, children, outlined, size, ...props }: Props) => JSX.Element;

declare const avatarStyles: (props?: ({
    offline?: boolean | null | undefined;
    online?: boolean | null | undefined;
    shape?: "circle" | "square" | "triangle" | "hexagon" | null | undefined;
    size?: "xsmall" | "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface AvatarProps extends VariantProps<typeof avatarStyles> {
    img?: string;
    placeholder?: string;
}
declare const Avatar: ({ placeholder, offline, online, shape, size, img, ...props }: AvatarProps) => JSX.Element;

export { Avatar, AvatarProps, Button, Props };
