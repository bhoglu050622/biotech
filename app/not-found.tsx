'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-indigo flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <h1 className="text-9xl sm:text-[12rem] font-display font-bold gradient-text">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-text-secondary text-lg mb-12 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-8 py-4 rounded-lg font-semibold hover:from-secondary-blue hover:to-accent-blue transition-all duration-200 shadow-blue hover:shadow-blue-lg w-full sm:w-auto"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-20 h-20 border border-primary-blue/20 rounded-2xl opacity-30 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-16 h-16 border border-accent-blue/20 rounded-xl opacity-30 hidden lg:block"
        />
      </motion.div>
    </div>
  )
}

