import React from 'react'
import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'
import { SparklineAreaData } from '../../data/dummy'

class SparkLine extends React.PureComponent {

  render(){
    const {id,heigth,width,data,type,currentColor,color} = this.props;

  
  return (
    <SparklineComponent
            id={id}
            height={heigth}
            width={width}
            lineWidth={1}
            valueType='Numeric'
            fill={color}
            dataSource={data}
            xName="xval"
            yName="yval"
            type={type}
            border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
              visible:true,
              format:'${xval} : data ${yval}',
              trackLineSettings:{
                visible:true,
              }
            }}
          >
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>
  )
          }
}

export default SparkLine