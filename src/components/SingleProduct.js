import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SingleProduct = (props) => {
  const { title, jobId, companyName, placeholders, jobDescription, createdDate } = props;
  const date = new Date(createdDate);

  return <Wrapper>
    <h3><Link to={`/products/${jobId}`}>{title}</Link></h3>
    <p className="company">{companyName}</p>
    <p className="date">Posted on: {date.toDateString()}</p>
    <p className="desc" dangerouslySetInnerHTML={{ __html: `${jobDescription.slice(0, 150)}...` }}></p>
    <p className="experience">{placeholders[0].label}</p>
    <p className="location"><LocationOnIcon />{placeholders[2].label}</p>
    <button>Apply</button>
  </Wrapper>
}

const Wrapper = styled.article`
width: 100%;
position: relative;
background: white;
padding: 5px 20px;
border-radius: 5px;
margin-bottom: 15px;
box-shadow: 0 0 4px #30d86e;
h3{
  max-width: 600px;
}
a{
  color: #15154a;
}
a, a:hover, a:focus, a:active {
color: #15154a;
}
.desc{
  margin: 20px 0;
  max-width: 600px;
  color: #6f7391;
}
.company{
  color: #08863f;
}
.date{
  font-size: 0.9rem;
}
.experience{
  position: absolute;
  top: 5px;
  right: 20px;
  color: #6f7391;
}
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

@media screen and (min-width: 481px) and (max-width: 768px) {
  h3{
    max-width: 300px;
  }
}
@media screen and (max-width: 480px) {
  h3{
    max-width: 150px;
  }
}
@media screen and (min-width: 1368px) {
  h3{
    max-width: 1000px;
  }
}
`

export default SingleProduct;