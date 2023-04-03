import React from 'react'
import { Pagelayout } from '../../component'
import useFetchData from '../../hooks/useFetchData'
import Spinner from '../../utils/spinner'
import Mediacard from '../../component/Mediacard'
import { Row, Col } from 'react-bootstrap'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'


export default function Popular() {
    const {error, newData, setPage, data} = useFetchData('movie/popular')

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

function fetchMore(){
  setTimeout(() => {
      setPage(prev => prev + 1)
      setIsFetching(false)
  }, 5000)
}
    if(!data) return <Spinner/>
  return (
          <Pagelayout error={error} heading='Popular'>
        <Row className='gy-2'>
            {[...newData, ...data].map((movie) => (
              <Col key={movie.id} xs={6} md={3} xl={2}>
                <Mediacard {...movie} />
                </Col>
            ))}
        </Row>
        {isFetching && <Spinner/>}
          </Pagelayout>
  )
}
