import React from 'react'

const seasonConfig={
  summer:{
    text:'Lets hit the beach',
    iconName:'sun'
  },
  winter:{
    text:'Burr it is cold',
    iconName:'snowflake'
  }
}

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
  const {text,iconName}=seasonConfig[season]
  return(
    <div>
      <i className={`massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`}/>
    </div>
  )
}
