import Button from "./Button/Button.jsx";
import {useState, useRef} from "react";

function StateVsRef() {
    const input = useRef('');
    const [show, setShow] = useState(false)
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setShow(prevShow => !prevShow)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <h3>Input value: {show && input.current.value}</h3>
            <label form="val">Enter text:</label>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                id="val"
            />
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })
    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help')
    // const [hasError, setHasError] = useState(true)
    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0 )
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    return (
        <section>
            <h3 style={{textTransform: 'uppercase'}}>Обратная связь</h3>
            <form>
                <label htmlFor="name" style={{fontSize: "1.5rem"}}>Ваше имя:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Введитите..."
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? "2px solid red" : null
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason" style={{fontSize: "1.5rem"}}>Причина обращения:</label>
                <select
                    id="reason"
                    value={form.reason}
                    onChange={event => setForm({...prev, reason: event.target.value})}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>
                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
            <hr />
            <StateVsRef />
        </section>
    )
}