import React from 'react'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';


Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf'
});

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    data: {
        margin: 2,
        padding: 1,
        fontFamily: 'Roboto',
        fontSize: 13, 
        flexGrow: 1,
        width: '45%'
    }
});

const ExportDocument = (props) => {

    const renderedItems = props.data.map((item, index) => (
        <View style={styles.item} key={index}>
            <Text style={styles.data}>{item.author.name}</Text>
            <Text style={styles.data}>{item.duration.presentation}</Text>
        </View>
    ))

    return (
        <Document>
            <Page size="A4">
                {renderedItems}
            </Page>
        </Document>
    )
}

export default ExportDocument