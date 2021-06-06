import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'

const Header = () => {
  return <Wrapper>
    <div className="left-nav">
      <button>
        <MenuIcon />
      </button>
      <h2 className="logo">
        <Link to="/">Job<span>PORTAL</span></Link>
      </h2>
      <div className="left-links">
        <h4><a href="#">For employees</a></h4>
        <h4><a href="#">For applicants</a></h4>
        <h4><a href="#">Support</a></h4>
      </div>
    </div>
    <div className="right-nav">
      <h4 className="sign-in"><a href="#">Sign In</a></h4>
      <h4><a href="#">Submit Jobs</a></h4>
    </div>
  </Wrapper>
}

const Wrapper = styled.nav`
display: flex;
justify-content: space-between;
margin-bottom: 60px;
  &>div{
    display: flex;
    align-items: center;
    button{
      display: none;
    }
    a{
      text-decoration: none;
      cursor: pointer;      
    }
    a, a:hover, a:focus, a:active {
color: inherit;
}
    h4{
      margin-left: 20px;
      color: #787c97;
    }
    h2{
      color: #373764;
      letter-spacing: 0.1em;
      span{
        color: #30d86e
      }
      margin-right: 30px;
    }
    .sign-in{
      background: #7df39c;
      cursor: pointer;
      padding: 0.2em 1em;
      border-radius: 5px;
      a{
        color: white;
      }
      &:hover{
        background: #08863f;
      }
    }
  }
  .left-links{
    display: flex;
  }

  @media screen and (min-width: 767px) and (max-width:990px){
    .left-links{
      display: none;
    }
    &>div{
      button{
      display: inline;
      background: rgba(0,0,0,0);
      cursor: pointer;
      margin-right: 20px;
      border: none;
      svg{
        color: #0c144a;
      }
     }
    }
  }

  @media screen and (max-width: 767px) {
    .left-links{
      display: none;
    }
    &>div{
      button{
      display: inline;
      background: rgba(0,0,0,0);
      cursor: pointer;
      margin-right: 20px;
      border: none;
      svg{
        color: #0c144a;
      }
     }
     h2{
       font-size: 1.4rem;
     }
     h4{
       font-size: 0.9rem;
       margin-left: 10px;
     }
  }
  }
  @media screen and (max-width: 480px){
    .left-nav .logo{
      display: none;
    }
  }
`

export default Header;