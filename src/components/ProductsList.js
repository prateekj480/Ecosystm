import useGlobalContext from '../context/context';
import SingleProduct from './SingleProduct';
import React from 'react';
import FilterOptions from './FilterOptions';
import styled from 'styled-components';

const ProductsList = () => {
  const { filteredJobs, clearFilters } = useGlobalContext();


  if (!filteredJobs.length) {
    return <Wrapper>
      <h2>No jobs found...</h2>
      <button onClick={clearFilters}>Back to all jobs</button>
    </Wrapper>
  }

  return <main>
    <FilterOptions />
    {filteredJobs.map(job => {
      return <SingleProduct key={job.jobId} {...job} />
    })}
  </main>
}

const Wrapper = styled.div`
button{
  font-size: 1rem;
  padding: 0.2em 1em;
  background: #7df39c;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;
  &:hover{
    background: #08863f;
  }
}
`

export default React.memo(ProductsList);