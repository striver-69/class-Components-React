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
  const text=season === 'winter'?'Burr it is chilly':'Lets go to beach'
  const icon= season=== 'winter' ? 'snowflake':'sun'
  return(
    <div>
      <i className={`${icon} icon`}/>
      <h1>{text}</h1>
      <i className={`${icon} icon`}/>
    </div>
  )
}
