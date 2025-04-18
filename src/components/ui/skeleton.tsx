
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

  // Extract all potentially conflicting event handlers
  // We need to exclude React DOM event handlers that conflict with Framer Motion's props
  const {
    onAnimationStart,
    onAnimationEnd,
    onAnimationIteration,
    onDrag,
    onDragEnd,
    onDragStart,
    onTransitionEnd,
    ...motionProps
  } = props;
  
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
      {...motionProps}
    />
  )
}

export { Skeleton }
