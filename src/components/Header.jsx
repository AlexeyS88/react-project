import vite from '../assets/vite.svg'
import react from '../assets/react.svg'
import { useState } from 'react'
export default function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(() => {
        setNow(new Date())
    }, 1000)
    const name = 'logo'
    return (
        <header>
            <div>
                <img src={react} alt={name} />
                <h3>React + Vite</h3>
                <img src={vite} alt={name} />
            </div>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
}