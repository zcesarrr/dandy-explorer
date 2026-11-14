type GradientLabelProps = {
    className?: string;
    gradientColor: string;
    label: string;
};

export default function GradientLabel({
    className,
    gradientColor,
    label,
}: GradientLabelProps) {
    return (
        <p 
            className={`${className ?? ""} text-shadow-none`}
            style={{
                backgroundImage: gradientColor,
                color: gradientColor,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "transparent",
            }}
        >
            {label}
        </p>
    );
}
