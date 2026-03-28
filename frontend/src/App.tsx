import { useState, useEffect } from 'react'
import { fetchHello, fetchStatus } from './api/client'
import './App.css'

function App() {
    const [message, setMessage] = useState<string>('Loading...')
    const [status, setStatus] = useState<string>('Unknown')

    useEffect(() => {
        // Call the backend API
        const loadData = async () => {
            try {
                const helloData = await fetchHello()
                setMessage(helloData.message)
            } catch (error) {
                console.error('Error fetching hello:', error)
                setMessage('Error connecting to backend')
            }

            try {
                const statusData = await fetchStatus()
                setStatus(statusData.status)
            } catch (error) {
                console.error('Error fetching status:', error)
                setStatus('Error')
            }
        }

        loadData()
    }, [])

    return (
        <div className="container">
            <h1>Full-Stack Hello World</h1>
            <div className="card">
                <p>Backend Message: <strong>{message}</strong></p>
                <p>Backend Status: <strong>{status}</strong></p>
            </div>
            <div className="info">
                <h3>Room for Expansion</h3>
                <ul>
                    <li>FastAPI Swagger: <a href="http://localhost:8000/docs" target="_blank">/docs</a></li>
                    <li>Scalable Structure: Check <code>backend/app/</code> and <code>frontend/src/</code></li>
                    <li>Dockerized: Controlled via <code>docker-compose.yml</code></li>
                </ul>
            </div>
        </div>
    )
}

export default App
