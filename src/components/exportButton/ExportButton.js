import React from 'react'
import {PDFDownloadLink} from '@react-pdf/renderer';
import ExportDocument from './ExportDocument';

const Export = (props) => {
      return(
        <PDFDownloadLink document={<ExportDocument data={props.data} />} fileName="somename.pdf">
            Export
        </PDFDownloadLink>
    )
  }

export default Export