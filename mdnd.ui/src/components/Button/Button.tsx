'use client'

type ButtonType = {
    variant?: 'default' | 'outline';
    size?: 'small' | 'medium' | 'large' | 'full';
    textWeight?: 'bold' | 'normal' | 'thin';
    noAnimation?: boolean;
    link?: string;
    onClick?: Function;
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonType> = ({
    variant = 'default', 
    size = 'medium', 
    textWeight = 'bold',
    noAnimation = false,
    link,
    onClick,
    className, 
    children
} : ButtonType) => {

    const variantStyles = {
        default: 'bg-white text-black p-2 rounded-md border-2 border-white transition ease-in-out',
        outline: 'bg-black text-white p-2 rounded-md border-2 border-white transition ease-in-out',
    }

    const sizeStyles = {
        small: 'w-[40%]',
        medium: 'w-[60%]',
        large: 'w-[80%]',
        full: 'w-full',
    }

    const textWeightStyles = {
        bold: 'font-bold',
        normal: 'font-normal',
        thin: 'font-thin',
    }

    return (
        <button className={`
            ${variantStyles[variant]}
            ${sizeStyles[size]}
            ${noAnimation? '' : 'active:scale-95'}
            ${className} 
        `}
            onClick={() => link ? window.location.href = link : onClick}
        >
            <p className={`${textWeightStyles[textWeight]}`}>{children? children : 'Button'}</p>
        </button>
    )
};

export { Button };