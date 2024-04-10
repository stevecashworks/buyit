import styled from "styled-components";
const Container=styled.div`
    width:100%;
    height:500px;
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding:30px 100px;

`
const ProfileHeader=styled.div`
    font-size:25px;
    font-weight:600;
    color:rgb(0,0,0,0.9)
`


const Profile=()=>{
    return(
        <Container>
            <ProfileHeader>Profile</ProfileHeader>

        </Container>
    )
}
export default Profile