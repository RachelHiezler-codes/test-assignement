import React, { useEffect, useState } from 'react'
import './home.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';



function Home(props) {
    const [usersDetails, setUsersDetails] = useState([]);
    const [filterByName, setFilterByName] = useState('');
    const [filterByEmail, setFilterByEmail] = useState('');
    let history = useHistory();


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users", {
        }).then(res => {
            setUsersDetails(res.data);
            console.log(res.data)
        }).catch(err => {
            alert(err + " Please log in again")
        })
    }, [])

    const ShowPosts = (e, userId) => {
        console.log(userId)
        history.push(`/displayPosts/${userId}`)
    }

    return (
        <>
            <Container>
                <Row className="display-table" >
                    <Col>
                        <table class="table table-hover table table-bordered table-w">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            {
                                <tbody>
                                    {usersDetails.
                                        filter(e => e.name.toLowerCase().includes(filterByName.toLowerCase()) && e.email.toLowerCase().includes(filterByEmail.toLowerCase()))
                                        .map((user, i) => {
                                            return <tr key={i} onClick={(e) => { ShowPosts(e, user.id) }} >
                                                <td>{user.name}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })}
                                </tbody>
                            }
                        </table>
                    </Col>
                    <Col className="mt-5"><input
                        type="text"
                        value={filterByEmail}
                        placeholder="Filter By Email"
                        onChange={e => setFilterByEmail(e.target.value)} />

                        <input
                            className="input-margin"
                            type="text"
                            value={filterByName}
                            placeholder="Filter By Name"
                            onChange={e => setFilterByName(e.target.value)} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;