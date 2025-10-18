#!/bin/bash

# Sentient Biotech - Production Server Starter
echo "🚀 Starting Sentient Biotech Production Server..."
echo ""

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Display Node version
NODE_VERSION=$(node --version)
echo "✓ Node.js $NODE_VERSION detected"
echo ""

# Set production environment
export NODE_ENV=production

# Default port
PORT=${PORT:-3000}

echo "📡 Server will start on port $PORT"
echo "🌐 Access at: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo "─────────────────────────────────────"
echo ""

# Start the server
node server.js

