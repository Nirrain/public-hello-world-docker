import { useState, useEffect } from 'react'
import { fetchHello, fetchStatus, fetchUser } from './api/client'
import './index.css'

function App() {
    const [message, setMessage] = useState<string>('Loading...')
    const [status, setStatus] = useState<string>('Unknown')
    const [username, setUsername] = useState<string>('Loading user...')

    useEffect(() => {
        const loadData = async () => {
            try {
                const [helloData, statusData, userData] = await Promise.all([
                    fetchHello(),
                    fetchStatus(),
                    fetchUser()
                ])
                setMessage(helloData.message)
                setStatus(statusData.status)
                setUsername(userData.username)
            } catch (error) {
                console.error('Error fetching data:', error)
                setMessage('Error connecting to backend')
                setStatus('Error')
                setUsername('Error loading user')
            }
        }

        loadData()
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 p-8 font-sans">
            <div className="flex flex-col items-center gap-12 max-w-2xl w-full">
                {/* Username Display */}
                <div className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-glow">
                    {username}
                </div>

                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-white tracking-tight">Full-Stack Hello World</h1>
                    <div className="flex gap-4 justify-center">
                        <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400">
                            Backend: <span className="text-cyan-400 font-mono">{message}</span>
                        </span>
                        <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400">
                            Status: <span className="text-emerald-400 font-mono">{status}</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl space-y-3 hover:border-zinc-700 transition-colors">
                        <h3 className="text-lg font-semibold text-white">FastAPI Swagger</h3>
                        <p className="text-sm text-zinc-400">Explore and test your API endpoints interactively.</p>
                        <a href="/docs" target="_blank" className="inline-block text-cyan-400 text-sm font-medium hover:underline">View Docs →</a>
                    </div>
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl space-y-3 hover:border-zinc-700 transition-colors">
                        <h3 className="text-lg font-semibold text-white">Scalable Structure</h3>
                        <p className="text-sm text-zinc-400">Clean separation between React (Vite) and FastAPI (Python).</p>
                        <code className="block text-xs bg-black p-2 rounded text-zinc-500">backend/app/ & frontend/src/</code>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 w-full text-center">
                    <p className="text-zinc-500 text-sm">
                        Optimized for <span className="text-white font-medium italic">Railway</span> & <span className="text-white font-medium italic">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default App
