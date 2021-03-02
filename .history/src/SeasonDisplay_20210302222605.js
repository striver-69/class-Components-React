import React from 'react'

const getSeason=(lat,month)=>{
  if(month>2&&month<9){
    return lat>0? 'Summer':'Winter'
  }
  else{
    return lat>0 ? 'winter':'summer'
  }
}

export default function SeasonDisplay(props) {
  const season=getSeason(props.lat,new Date().getMonth())

  return <div>{season === 'winter'?'Burr it is chilly':'Lets go to beach'}</div>
}
