import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-indigo">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-electric-cyan mb-4">404</h1>
        <p className="text-white mb-8">Page not found</p>
        <Link 
          href="/" 
          className="bg-electric-cyan text-deep-indigo px-6 py-3 rounded-lg font-semibold hover:bg-electric-cyan/90 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
