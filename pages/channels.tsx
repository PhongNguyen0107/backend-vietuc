import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppLayout from "../conponents/containers/AppLayout";
import Head from "next/head";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import moment from "moment";
import {DATE_FORMAT} from "../src/config/app.constant";
import {getListOfChannel} from "services/app/channels.app";

export default function ChannelsPage() {

  return (
    <React.Fragment>
      <Head>
        <title>Channels Page</title>
        <meta name="description" content="Trang quản lý kênh chat"/>
        <link rel="icon"
              href="https://www.creativefabrica.com/wp-content/uploads/2019/04/Chat-icon-by-ahlangraphic-39.jpg"/>
      </Head>
      <AppLayout>
        <Typography variant={"h2"} >Channel Management</Typography>

        <Box sx={{pt: 2}}>
          <BasicExampleDataGrid/>
        </Box>
      </AppLayout>
    </React.Fragment>
  );
}


const BasicExampleDataGrid = ()=>  {
  const [dataTable, setDataTable] = useState([])

  const loadDataList = () => {
    getListOfChannel().then(res => {
      console.table(res.data.data)
      setDataTable(res.data.data)
    })
  }

  useEffect(() => {
    loadDataList()
  }, [])

  const columns = [
    {
      "field": "id",
      "hide": true
    },
    {
      "field": "name",
      "headerName": "Channel name",
      "sortable": true,
      "filterable": true,
      "disableExport": false,
      "width": 220,
      "editable": true
    },
    {
      "field": "created_at",
      "headerName": "Created At",
      "width": 220,
      valueGetter: (record: any) => {
        return moment.unix(record?.value?._seconds).format(DATE_FORMAT.FULL);
      }
    },
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        initialState={{
          "columns": {
            "columnVisibilityModel": {
              "id": false,
            }
          }
        }}
        columns={columns} rows={dataTable}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            //refs: https://mui.com/x/react-data-grid/filtering/#quick-filter
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          }
        }}
      />
    </div>
  );
}