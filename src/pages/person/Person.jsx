import React from 'react'
import { Pagelayout } from '../../component'
import useFetchData from '../../hooks/useFetchData'
import Spinner from '../../utils/spinner'
import Personcard from '../../component/Personcard'
import { Row, Col } from 'react-bootstrap'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

export default function Person() {
    const {error, data, setPage, newData} = useFetchData('person/popular')
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

function fetchMore(){
  setTimeout(() => {
      setPage((prev) => prev + 1)
      setIsFetching(false)
  }, 5000)
}
    if(!data) return <Spinner/>

  return (
    <Pagelayout error={error} heading='Trending People'>
    <Row className='gy-2'>
        {[...newData, data].map((person, index) => (
          <Col key={index} xs={6} md={3} xl={2}>
            <Personcard {...person} />
            </Col>
        ))}
    </Row>
    {isFetching && <Spinner/>}
      </Pagelayout>
  )
}
