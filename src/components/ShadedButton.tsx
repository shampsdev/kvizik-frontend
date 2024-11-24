import { cn } from "@/lib/utils"

export default function ShadedButton({
  className,
  children,
  ...props
}: {
  className?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative flex-1">
      <button
        className={cn(
          "border border-black rounded-xl px-2 md:px-4 py-3 relative z-10 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </button>
      <button
        className={cn(
          "border border-black rounded-xl px-2 md:px-4 py-3 ",
          className,
          "bg-black absolute top-1 left-1"
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}
