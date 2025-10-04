'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ClientMotionProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileInView?: any
  whileHover?: any
  whileTap?: any
  viewport?: any
  exit?: any
  variants?: any
  custom?: any
  [key: string]: any
}

export default function ClientMotion({ children, ...props }: ClientMotionProps) {
  return <motion.div {...props}>{children}</motion.div>
}

export const MotionSection = ({ children, ...props }: ClientMotionProps) => (
  <motion.section {...props}>{children}</motion.section>
)

export const MotionDiv = ({ children, ...props }: ClientMotionProps) => (
  <motion.div {...props}>{children}</motion.div>
)

export const MotionButton = ({ children, ...props }: ClientMotionProps) => (
  <motion.button {...props}>{children}</motion.button>
)

export const MotionH1 = ({ children, ...props }: ClientMotionProps) => (
  <motion.h1 {...props}>{children}</motion.h1>
)

export const MotionH2 = ({ children, ...props }: ClientMotionProps) => (
  <motion.h2 {...props}>{children}</motion.h2>
)

export const MotionH3 = ({ children, ...props }: ClientMotionProps) => (
  <motion.h3 {...props}>{children}</motion.h3>
)

export const MotionP = ({ children, ...props }: ClientMotionProps) => (
  <motion.p {...props}>{children}</motion.p>
)

export const MotionSpan = ({ children, ...props }: ClientMotionProps) => (
  <motion.span {...props}>{children}</motion.span>
)

export const MotionUl = ({ children, ...props }: ClientMotionProps) => (
  <motion.ul {...props}>{children}</motion.ul>
)

export const MotionLi = ({ children, ...props }: ClientMotionProps) => (
  <motion.li {...props}>{children}</motion.li>
)

export const MotionArticle = ({ children, ...props }: ClientMotionProps) => (
  <motion.article {...props}>{children}</motion.article>
)

export const MotionForm = ({ children, ...props }: ClientMotionProps) => (
  <motion.form {...props}>{children}</motion.form>
)

export const MotionInput = ({ ...props }: any) => (
  <motion.input {...props} />
)

export const MotionTextarea = ({ ...props }: any) => (
  <motion.textarea {...props} />
)

export const MotionSelect = ({ children, ...props }: ClientMotionProps) => (
  <motion.select {...props}>{children}</motion.select>
)

export const MotionTable = ({ children, ...props }: ClientMotionProps) => (
  <motion.table {...props}>{children}</motion.table>
)

export const MotionThead = ({ children, ...props }: ClientMotionProps) => (
  <motion.thead {...props}>{children}</motion.thead>
)

export const MotionTbody = ({ children, ...props }: ClientMotionProps) => (
  <motion.tbody {...props}>{children}</motion.tbody>
)

export const MotionTr = ({ children, ...props }: ClientMotionProps) => (
  <motion.tr {...props}>{children}</motion.tr>
)

export const MotionTh = ({ children, ...props }: ClientMotionProps) => (
  <motion.th {...props}>{children}</motion.th>
)

export const MotionTd = ({ children, ...props }: ClientMotionProps) => (
  <motion.td {...props}>{children}</motion.td>
)
