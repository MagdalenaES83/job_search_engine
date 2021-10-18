import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Jobb from './Jobb.jsx'
import uniqid from 'uniqid'

export default class SearchResults extends React.Component {

    state = {
        jobs: []
    }

    componentDidMount() {
        this.getJobs()
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

    getJobs = async () => {
        const response = await fetch(this.baseEndpoint + this.props.match.params.companyName)
        const { data } = await response.json()

        this.setState({ jobs: data })
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {
                        this.state.jobs.map(jobData => <Jobb key={uniqid()}  data={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    }
}