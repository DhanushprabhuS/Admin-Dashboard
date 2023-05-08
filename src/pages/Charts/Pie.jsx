import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';


const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <div className='w-full'>
      <Header category={"Chart"} title={"Project Cost Breakdown"} isChart type={"Pie"}/>
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>

    </div>
  )

}

export default Pie