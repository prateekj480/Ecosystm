import { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import useGlobalContext from '../context/context';

const FilterOptions = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { updateFilters, filters: { text, location, experience, keyword } } = useGlobalContext();

  const onSubmit = e => {
    e.preventDefault();
  }

  return <Wrapper>
    <form onSubmit={onSubmit}>
      <div className="input-field">
        <input type="text" name="text" value={text} onChange={updateFilters} placeholder='Search for jobs...' />
        <button type="submit"><SearchIcon /></button>
      </div>
      <button class="advanced" onClick={() => setShowAdvanced(!showAdvanced)}>Advanced Search</button>
      <div className="advanced-search" style={{ display: `${showAdvanced ? 'block' : 'none'}` }}>
        <label htmlFor="keyword">Search by keyword</label>
        <input type="text" id="keyword" name="keyword" value={keyword} onChange={updateFilters} />
        <label htmlFor="location">Search by location</label>
        <input type="text" id="location" name="location" value={location} onChange={updateFilters} />
        <label htmlFor="experience">Search by experience</label>
        <input type="text" id="experience" name="experience" value={experience} onChange={updateFilters} />
        <button onClick={() => setShowAdvanced(false)}>Close</button>
      </div>
    </form>
  </Wrapper>
}

const Wrapper = styled.section`
margin: 50px 0;
form{
  width: 100%;
  .advanced{
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
  .input-field{
    width: 100%;
    position: relative;
    border-radius: 5px;
    input{
    width: 100%;
    padding: 1em 1em;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    height: 30px;
    box-shadow: 0 0 4px #30d86e;
    &:focus{
      outline: none;
      box-shadow: 0 0 4px #08863f;
    }
  }
    button{
      position: absolute;
      right: 1em;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background: rgba(0,0,0,0);
      border: none;
      svg{
        color: #15154a;
        pointer-events: none;
      }
    }
  }
  .advanced-search{
    background: white;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0 0 4px #08863f;
    max-width: 500px;
    margin-top: 10px;
    input, label{
      display: block;
    }
    input{
      margin-bottom: 5px;
      width: 100%;
      padding: 1em 1em;
      border-radius: 5px;
      font-size: 1rem;
      border: none;
      height: 30px;
      box-shadow: 0 0 4px #30d86e;
      &:focus{
        outline: none;
        box-shadow: 0 0 4px #08863f;
      }
    }
    label{
      font-size: 1rem;
    }
    button{
      font-size: 0.9rem;
      padding: 0.2em 1em;
      background: #fe585d;
      color: white;
      border: none;
      border-radius: 5px;
      margin: 10px 0;
      cursor: pointer;
      &:hover{
        background: #f25515;
      }
    }
  }
}
`

export default FilterOptions;