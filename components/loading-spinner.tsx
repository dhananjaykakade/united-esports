"use client"

import { motion } from "framer-motion"
import Logo from "@/components/logo"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: 9999, ease: "linear" }}>
          <Logo className="h-16 w-16" glowing={true} />
        </motion.div>
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading UNITED Esports...
        </motion.p>
      </div>
    </div>
  )
}
