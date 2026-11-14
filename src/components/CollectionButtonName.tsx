import type { ComponentProps, CSSProperties, ReactNode } from "react";

type CollectionButtonNameProps = {
    className?: string;
    children?: ReactNode;
    name: string;
};

export default function CollectionButtonName({ className, children, name }: CollectionButtonNameProps) {
    const props: ComponentProps<"p"> = {
        style: { "--chars": name.length } as CSSProperties,
        className: `font-fredoka text-center leading-none line-clamp-2 text-balance text-[clamp(12px,calc(100cqw/(var(--chars)*0.52)),18px)] ${className}`,
    };

    return (
        <div className="@container w-full h-5.5 flex items-center justify-center overflow-hidden">
            {children === undefined ? (
                <p
                    {...props}
                >
                    {children ?? name}
                </p>
            ) : (
                <div
                    {...props}
                >
                    {children ?? name}
                </div>
            )}
        </div>
    );
}
