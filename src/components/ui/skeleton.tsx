
import { cn } from "@/lib/utils"
import { motion } from "framer-motion";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  shimmer?: boolean;
}

function Skeleton({
  className,
  animated = true,
  shimmer = true,
  ...props
}: SkeletonProps) {
  if (!animated) {
    return (
      <div
        className={cn("rounded-md bg-muted", className)}
        {...props}
      />
    )
  }

  // Separate animation and DOM props to avoid type conflicts
  const { onAnimationStart, onAnimationComplete, ...otherProps } = props;
  
  return (
    <motion.div
      className={cn(
        "rounded-md bg-muted overflow-hidden relative", 
        shimmer && "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ 
        repeat: Infinity, 
        duration: 2, 
        ease: "easeInOut" 
      }}
      {...otherProps}
    />
  )
}

export { Skeleton }
