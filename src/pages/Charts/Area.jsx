import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries} from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { Header } from '../../components'

import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {

  const {currentMode,currentColor} = useStateContext();
  
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <div className='w-full'>
      <Header category={"Chart"} title={"Inflation Rate in Percentage"} type={"Area"} isChart/>
      <ChartComponent
      id="area-chart"
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode==='Dark'?'#33373e':'#fff'}
      legendSettings={{ background: 'white' }}
      //palettes={['rgb(3, 201, 215)','rgb(255, 92, 142)','rgb(251, 150, 120)']}
    >
      <Inject services={[DateTime,Legend,SplineAreaSeries]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=>(<SeriesDirective key={index} {...item}/>))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
    
  )
}

export default Area