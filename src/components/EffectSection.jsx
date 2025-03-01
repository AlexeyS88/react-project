import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState, useCallback} from "react";
import useInput from "../hooks/useInput.js";

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, []);
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return (
        <section>
            <h3>Effects</h3>
            <Button
                style={{display: 'block', margin: '0 auto'}}
                onClick={() => setModal(!modal)}
            >
                Открыть информацию
            </Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. A ab animi aperiam cum, est ex exercitationem
                    fugit illo molestias nihil nulla numquam quasi,
                    quibusdam quo, recusandae repellendus ullam vel
                    voluptate!
                </p>
                <Button style={{display: 'block', margin: '0 auto'}} onClick={() => setModal(!modal)}>Закрыть информацию</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <label form="filter" style={{display: "block", marginTop: "2rem", textAlign: "center"}}>Поиск по имени:</label>
                    <input type="text" id="filter" style={{margin: "2rem auto"}} className="control" {...input}/>
                    <ul style={{textAlign: "center", margin: "1rem auto", minWidth: 'fit-content', maxWidth: "30%"}}>
                        {users
                            .filter(user => user.name.toLowerCase().includes(input.value.toLowerCase()))
                            .map(user => (
                    <li key={user.id}>{user.name}: {user.address.city}</li>
                    ))}
                    </ul>
                </>
            )}
        </section>
    )
}