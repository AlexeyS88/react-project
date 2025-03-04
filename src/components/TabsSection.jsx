import Button from "./Button/Button.jsx";

export default function TabsSection({ active, onChange }) {
    return (
        <section className="section" style={{justifyContent: 'end', margin: '22px 10px 52px', flexWrap: 'wrap'}}>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
            <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>
        </section>
    )
}