import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import useGlobalContext from '../context/context';
import styled from 'styled-components';

const SingleProductPage = () => {
  const { setSingleJob, singleJob } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    setSingleJob(id.toString());
  }, [id])

  if (!singleJob) return <h2>Loading...</h2>;

  return <Wrapper>
    <h4>Job Title: {singleJob.title}</h4>
    <h4>Experience: {singleJob.placeholders[0].label}</h4>
    <h4>Location: {singleJob.placeholders[2].label}</h4>
    <div dangerouslySetInnerHTML={{ __html: singleJob.jobDescription }}></div>
  </Wrapper>
}

const Wrapper = styled.article`
&>div{
  margin-top: 50px;
}
`

export default SingleProductPage;