import vite from '../../assets/vite.svg'
import react from '../../assets/react.svg'
import { useState } from 'react'
import { styled } from 'styled-components'
import './Header.module.css'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    gap: 1rem;
    background-color: darkblue;
    padding: 16px;
    border-radius: 12px;
`

export default function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(() => {
        setNow(new Date())
    }, 1000)
    const name = 'logo'
    return (
        <header>
            <HeaderContainer>
            <div>
                <img src={react} alt={name} />
                <h3>React + Vite</h3>
                <img src={vite} alt={name} />
            </div>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
            </HeaderContainer>
        </header>
    )
}