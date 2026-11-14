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
        <span className="relative inline-block">
            <span
                aria-hidden
                className={`${className ?? ""} absolute inset-0 text-shadow-none select-none`}
                style={{
                    color: "black",
                    WebkitTextStroke: `2px black`,
                }}
            >
                {label}
            </span>
            <p 
                className={`${className ?? ""} relative text-shadow-none`}
                style={{
                    backgroundImage: gradientColor,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {label}
            </p>
        </span>
    );
}
