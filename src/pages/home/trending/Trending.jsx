import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "../Home.scss";
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {
  const [endPoint, setendPoint] = useState("day");
const {data, loading} = useFetch(`/trending/all/${endPoint}`);
console.log(data);

const onTabChange = (tab) => {
  setendPoint(tab === "Day" ? "day" : "week");
};

  return (
    <div className='carouserSelection'>
      <ContentWrapper> 
        <span className='carouseTitle'>
        Trending  
         </span>
         <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel  data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending;