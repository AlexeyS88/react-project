import Button from "./Button/Button.jsx";

export default function FeedbackSection() {
    return (
        <section>
            <h3 style={{textTransform: 'uppercase'}}>Обратная связь</h3>
            <form>
                <label htmlFor="name" style={{fontSize: "1.5rem"}}>Ваше имя:</label>
                <input type="text" id="name" placeholder="Введитите..." className="control"/>

                <label htmlFor="reason" style={{fontSize: "1.5rem"}}>Причина обращения:</label>
                <select id="reason">
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button>Отправить</Button>
            </form>
        </section>
    )
}