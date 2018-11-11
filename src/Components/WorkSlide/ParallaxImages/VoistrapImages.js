import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import voistrapHomeImg from '../../../Assets/Images/Voistrap/Home.png';
import voistrapMeetingsImg from '../../../Assets/Images/Voistrap/Meetings.png';
import voistrapPeopleImg from '../../../Assets/Images/Voistrap/People.png';
import voistrapScoreImg from '../../../Assets/Images/Voistrap/Score.png';


const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 6}%)`,
  }),
})`
position: absolute;
bottom: -15vh;
left:0vw;
/* border: 1px dashed red; */
height: 85vh; 
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 15}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:5vh;
right: 2vw;
/* border: 1px dashed red; */
height: 85vh;
filter: blur(0.6px);
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 20}%) scale(0.7)`,
  }),
})`
bottom:-35vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 85vh;
filter: blur(0.8px);
`;

const VoistrapPhonePeople = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 100}%) scale(0.6)`,
  }),
})`
bottom:-30vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 85vh;
filter: blur(1.2px);
`;

class VoistrapImages extends Component {
  render() {
    let { scrollDistance } = this.props;
    const { screenHeight } = this.props;
    scrollDistance -= screenHeight / 2;
    return (
      <React.Fragment>
        <VoistrapPhonePeople src={voistrapPeopleImg} scroll={scrollDistance} alt="voistrapPeople" />
        <VoistrapPhoneScore src={voistrapScoreImg} scroll={scrollDistance} alt="voistrapScore" />
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollDistance} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollDistance} alt="voistrapHome" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  scrollDistance: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
};

export default VoistrapImages;