import React from "react";
import "./Details.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailBanner";
import Cast from "./Cast/Cast";
import VideosSection from "./videosSelection/VideosSelection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  
 console.log(credits);

  return (
    <> 
  <DetailsBanner video={data?.results[0]} crew={credits?.crew}/>
  <Cast data={credits?.cast} loading={creditsLoading} />
  <VideosSection data={data} loading={loading} />
  <Similar id={id} mediaType={mediaType} />

  <Recommendation id={id} mediaType={mediaType} />
  </>
  );
};

export default Details;
