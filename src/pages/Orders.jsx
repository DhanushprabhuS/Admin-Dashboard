import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort,
ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit, Inject,Toolbar } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


const Orders = () => {

  let grid;
    const toolbar = ['PdfExport','ExcelExport'];
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.showSpinner();
            grid.excelExport();
        }
        else if (args.item.id === 'grid_pdfexport') {
          grid.showSpinner();
          grid.pdfExport();
      }
    };

    const excelExportComplete = () =>{
      if(grid){
        grid.hideSpinner();
      }
    }

    const pdfExportComplete = () => {
      if (grid) {
          grid.hideSpinner();
      }
  };

  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl' >
      <Header title="Orders" category="Page"/>
      <GridComponent
        id='grid'
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
        pageSettings={{pageSize:7, pageSizes:true}}
        allowExcelExport={true}
        allowPdfExport={true}
        toolbar={[...toolbar]}
        toolbarClick={toolbarClick}
        excelExportComplete={excelExportComplete}
        pdfExportComplete={pdfExportComplete}
        editSettings={editOptions}
        ref={g => grid = g} 
      >
        
        <ColumnsDirective>
        {
          ordersGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)
        }
        </ColumnsDirective>
        <Inject services={[Toolbar,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport]}/>
        
      </GridComponent>
    </div>
  )
}

export default Orders