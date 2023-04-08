import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
const ChannelDetail = () => {

  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null)

  const [videos, setVideos] = useState([])

  console.log(channelDetail)
  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id])



  return (
    <Box minHeight="95vh">
      <Box>
        <div style= {{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(78,171,227,1) 0%, rgba(9,121,112,1) 100%)",
                zIndex: 10,
                height: '300px'
           }}
        />
        
        <ChannelCard channelDetail = {channelDetail} mtop='-93px'/>
      </Box>
      <Box displa='flex' p='2'>
         <Box sx={{mr: {sm: '100px'}}} />
         <Videos videos={videos} />
      </Box>
    
    </Box>
  )
}

export default ChannelDetail