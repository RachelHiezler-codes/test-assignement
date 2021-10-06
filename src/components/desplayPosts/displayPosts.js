import React, { useEffect, useState } from 'react'
import './displayPosts.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import CreatePosts from '../createPosts/createPosts'
import { Container, Row, Col } from 'react-bootstrap';

function DisplayPosts(props) {
    debugger
    const [userPosts, setUserPosts] = useState([]);
    const [modalShow, setModalShow] = useState(false)
    let params = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            headers: {
                Authorization: ""
            }
        }).then(res => {
            setUserPosts(res.data);
            console.log(res.data)
        }).catch(err => {
            alert(err + " Please log in again")
        })
    }, [])

    const handleShow = () => {
        setModalShow(!modalShow);
    }

    return (
        <>

            <Container className="mt-5">
                <Row>
                    {userPosts.filter((e) => e.userId == params.id)
                        .map((post, i) => (
                            <Col sm={3} className="mb-3" >
                                <div class="card border-dark card-w" >
                                    <div class="card-header card-place">{post.title}</div>
                                    <div class="card-body text-dark">
                                        <p class="card-text">{post.body}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    <Col className="mt-5">
                        <button type="button" class="btn btn-primary" onClick={handleShow}>Create Post</button>
                    </Col>
                </Row>
            </Container>

            <CreatePosts
                show={modalShow}
                onHide={handleShow}
                handleShow={handleShow}
                setUserPosts={setUserPosts}
            />
        </>
    );
}

export default DisplayPosts;