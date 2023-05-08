import React from 'react'
import { Header } from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, BarSeries,ColumnSeries } from '@syncfusion/ej2-react-charts';

import { barPrimaryXAxis, barPrimaryYAxis, barCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {

  const {currentMode} = useStateContext
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <div className='w-full'>
      <Header category={"Chart"} title={"Olympic Medal Counts - RIO"} type={"Bar"} isChart/>
      <ChartComponent
      id="bar-chart"
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode==='Dark'?'#33373e':'#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[ColumnSeries, Legend,BarSeries,Tooltip,Category, DataLabel]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item,index)=>(<SeriesDirective  key={index} {...item}/>))}
      </SeriesCollectionDirective>
    </ChartComponent>
      </div>
    </div>
  )
}

export default Bar