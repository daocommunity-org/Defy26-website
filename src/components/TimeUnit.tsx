import { motion } from "framer-motion";

interface TimeUnitProps {
  value: number;
  label: string;
}

export default function TimeUnit({ value, label }: TimeUnitProps) {
  const displayValue = value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        key={value}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="bg-black rounded-2xl p-6 md:p-8 border-2 border-[#39ff14] min-w-[100px] md:min-w-[140px] shadow-[0_0_30px_rgba(57,255,20,0.4)]">
          <span className="text-5xl md:text-7xl font-bold text-[#39ff14] drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">
            {displayValue}
          </span>
        </div>
        <div className="absolute inset-0 bg-[#39ff14]/20 rounded-5xl blur-xl -z-10" />
      </motion.div>
      <span className="text-sm md:text-base font-black text-[#66ff33] uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}