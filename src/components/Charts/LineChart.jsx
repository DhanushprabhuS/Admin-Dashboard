import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip,LineSeries} from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {

  const {currentMode,currentColor} = useStateContext();
  const marker = {
    dataLabel: {
        visible: true, font: { color: "blue", fontWeight: "500" }, border: { width: 2, color: 'red' },
        rx: 10, ry: 10
    }
  };

  return (
    <ChartComponent
      id="line-chart"
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode==='Dark'?'#33373e':'#fff'}
      legendSettings={{ background: 'white' }}
      palettes={['rgb(3, 201, 215)','rgb(255, 92, 142)','rgb(251, 150, 120)']}
    >
      <Inject services={[DateTime,Legend,Tooltip,LineSeries,]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>(<SeriesDirective key={index} {...item}/>))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart