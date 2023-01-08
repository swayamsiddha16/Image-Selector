import React,{useState} from 'react';
import styled from 'styled-components'
import DiamondIcon from '@mui/icons-material/Diamond';
import { IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';




function Header(props) {




  const[input,setInput] = useState("");



  const onSubmitHandler=(e)=>{

    e.preventDefault();
    
    props.onSubmit(input);
    
  }
  return (
    <div >
      <wrapper style={{display:"flex",width:"100vw",marginTop:"1vh"}}>
      
        <LogoWrapper>
          <IconButton>
            <DiamondIcon/>
          </IconButton>
        </LogoWrapper>
        <HomePageButton>
          <a href='/'>Homepage</a>
        </HomePageButton>
        <FollowingButton>
          <a href='/'>Following</a>
        </FollowingButton>
        <SearchWrapper>
          <SearchBarWrapper> 
            <IconButton>
              <SearchIcon onClick={onSubmitHandler}/>
            </IconButton>
            <form>
              <input type="text" onChange={(e)=>setInput(e.target.value)}/>
              <button type="submit" onClick={onSubmitHandler}> </button>
            </form>
          </SearchBarWrapper>

        </SearchWrapper>

        <IconsWrapper>


          <IconButton>
            <NotificationsIcon/>
          </IconButton>

          <IconButton>
            <TextsmsIcon/>
          </IconButton>

          <IconButton>
            <FaceIcon/>
          </IconButton>

          <IconButton>
            <KeyboardArrowDownIcon/>
          </IconButton>
          
        </IconsWrapper>

        <LoginButton>
          <a href='/'>Log-in</a>
        </LoginButton>

        <SignupButton>
          <a href='/'>Sign-up</a>
        </SignupButton>

        <MenuButton>
          <MenuIcon/>
        </MenuButton>
        
        </wrapper>
    </div>
      
  )
}

export default Header

const wrapper = styled.div`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 16px;
background-color:white;
color:black;
`

const IconsWrapper= styled.div`
`
const LogoWrapper = styled.div`

.MuiSvgIcon-root{
  color:#53588a;
  font-size:32px;
  curser:pointer;
}`

const HomeButtons = styled.div`
  display:flex;
  height:40px;
  width:20px;
  min-width:123px;
  align-items:center;
  justify-content:center;
  border-radius:24px;
  cursor:pointer;
`

const HomePageButton = styled(HomeButtons)`

background-color:rgb(17,17,17);

a{
  text-decoration: none;
  color:white;
  font-weight:700;
  
}`
const FollowingButton = styled(HomeButtons)`

background-color:white;

a{
  text-decoration: none;
  color:black;
  font-weight:700;
  
}
:hover{
  background-color:#e1e1e1;
  
}
`

const SearchWrapper = styled.div`
  flex:1; 
`
const SearchBarWrapper = styled.div`
    background-color:#efefef;
    display:flex;
    height:40px;
    width;100%;
    border-radius:50px;
    border-:none;
    padding-left:10px;

    form{
      display:flex;
      flex:1;
    }

    form > input {
      background-color: transparent;
      border: none;
      width:100%;
      margin-left:5px;
      font-size:16px;
    }
    
    form > button {
      display:none; 
    }

    input:focus{
      outline:none;
    }

`
const UserButtons = styled.div`
  display:flex;
  height:30px;
  width:10px;
  min-width:123px;
  align-items:center;
  justify-content:center;
  border-radius:24px;
  cursor:pointer;
`
const LoginButton = styled(UserButtons)`
    background-color:white;

    a{
      text-decoration: none;
      color:black;
      font-weight:700;
      
    }
    :hover{
      background-color:#e1e1e1;
      
    }
`

const SignupButton = styled(UserButtons)`
    background-color:white;

    a{
      text-decoration: none;
      color:black;
      font-weight:700;
      
    }
    :hover{
      background-color:#e1e1e1;
      
    }
`

const MenuButton = styled.div`
    background-color:#efefef;
    display:flex;
    height:40px;
    width;100%;
    border-radius:50px;
    border-:none;
    padding-right:20px;
    
    cursor:pointer;

    :hover{
      background-color:#e1e1e1;
      
    }
`

