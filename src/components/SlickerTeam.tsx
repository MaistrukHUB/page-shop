import React from 'react'
import Slider, { ResponsiveObject } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamItem from './TeamItem';
import { TeamItemType } from '../redux/Slices/teamSlice';
import { SlickesComponentProps } from './Slickes';
import { useSelector } from 'react-redux';
import { selectTeam } from '../redux/Slices/teamSlice';


type SlickTeamBlockProps = {
    settings:SlickesComponentProps
}

const SlickerTeam: React.FC<SlickTeamBlockProps>= ({settings}) => {
    const { team  } = useSelector(selectTeam)
  return (
    <Slider {...settings}>
      {team.map((item) => (
        <div className="card">
          <TeamItem item={item}/>
        </div>
      ))}
    </Slider>
  )
}

export default SlickerTeam