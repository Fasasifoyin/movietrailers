import React from 'react'
import useFetchData from '../hooks/useFetchData'
import { useEffect } from 'react'
import { Pagelayout, Mediacard } from '../component'
import Spinner from '../utils/spinner'
import { Row, Col } from 'react-bootstrap'
import useInfiniteScroll from '../hooks/useInfiniteScroll'


export default function Home() {
const{error, data, setPage, newData} = useFetchData('trending/movie/week')
const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

function fetchMore(){
  setTimeout(() => {
      setPage(prev => prev + 1)
      setIsFetching(false)
  }, 5000)
}

useEffect(() => {
    document.title = 'Home'
}, [])
//shows home instead of react

  return (
    <Pagelayout heading='Trending Movies' error={error}>
      <Row className='gy-2'>
            {[...newData, ...data].map((movie, index) => (   //note newData before old data
              <Col key={index} xs={6} md={3} xl={2}>
                <Mediacard {...movie} />
                </Col>
            ))}
        </Row>
        {isFetching && <Spinner/>}
    </Pagelayout>
  )
}
