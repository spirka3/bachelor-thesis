import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import {pages} from "../../data";

const AdminPage = () => {

  const handleAccept = () => {
  }

  const columns = [{
    dataField: 'name',
    text: 'Page name'
  }, {
    dataField: 'visible',
    text: 'Visible'
  }]

  return (
    <BootstrapTable
      keyField="id"
      hover
      data={pages}
      columns={columns}
    />
  )
}

export default AdminPage