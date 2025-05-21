import { ImageOff } from "lucide-react";
import { motion } from "motion/react";

export default function PlaceholderImage() {
  return (
    <motion.div
      className="flex items-center justify-center h-full w-full bg-muted text-muted-foreground border border-dashed border-border"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-2">
        <ImageOff className="w-8 h-8" />
        <span className="text-sm">No Image Available</span>
      </div>
    </motion.div>
  );
}