import styled from "styled-components";
import profileData from "./profiledata";
import ProfileRow from "./profileRow";
const Container=styled.div`
    width:100%;
    height:600px;
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding:30px 100px;

`
const ProfileHeader=styled.div`
    font-size:25px;
    font-weight:600;
    color:rgb(0,0,0,0.9);
`
const RowsCon=styled.div`
    margin-top:40px;
`


const Profile=()=>{
    return(
        <Container>
            <ProfileHeader>Profile</ProfileHeader>
            <RowsCon>
            {profileData.map(detail=><ProfileRow {...detail} />)}
            </RowsCon>

        </Container>
    )
}
export default Profile