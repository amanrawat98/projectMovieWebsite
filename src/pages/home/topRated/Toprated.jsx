import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "../Home.scss";
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Toprated = () => {
  const [endPoint, setendPoint] = useState("movie");
const {data, loading} = useFetch(`/${endPoint}/top_rated`);
console.log(data);

const onTabChange = (tab) => {
  setendPoint(tab === "movie" ? "movie" : "tv");
};

  return (
    <div className='carouserSelection'>
      <ContentWrapper> 
        <span className='carouseTitle'>
        Top Rated 
         </span>
         <SwitchTabs data={["movie","tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel  data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default Toprated;