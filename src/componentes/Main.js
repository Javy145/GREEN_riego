import React, { useState } from 'react'
import ButtonAppBar from './ButtonAppBar'
import Frame from './Frame'
//material-ui
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Main () {

  const media = useMediaQuery('(min-width: 935px)');
  const [currentiFrame, setCurrentiFrame] = useState(0);
 
  return (
    <div>
      <ButtonAppBar setCurrentiFrame={(val)=> setCurrentiFrame(val)}/>
        <Box mx={media? 2:0} my={2} justifyContent="center" display='flex'>
          {currentiFrame!==0 && <Frame currentiFrame={currentiFrame} />}
        </Box>
    </div>
  )
}