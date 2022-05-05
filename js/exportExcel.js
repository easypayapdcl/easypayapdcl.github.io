var dynamicWidth = [], bodyToExtract = [], fileName = null, imageURI = null;
var dateRegEx = /^\d{4}-\d{2}-\d{2}$/;

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/*{ text: 'Assam Power Distribution Company Limited', style: 'header' },
{ text:  parent, style: 'subheaderCenter' },
{ text:  'CIN : U40109AS2003SGC007242', style: 'subheaderCenter' },
{ text:  'GSTIN : 18AABCL1354J1ZJ', style: 'subheaderCenter' },
{ text:  exportType + ' Report', style: 'subheaderCenter' },
*/
function exportToExcel(mainTable,rowHeader,fileName) {
 
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
       var arrData = mainTable
       
       var CSV = ''          
    row = rowHeader
    CSV += row + '\r\n'
       //1st loop is to extract each row
       for (var i = 0; i < arrData.length; i++) {
       
           var row = '"' + (i +1) + '",'
           for(var j = 0 ; j < arrData[i].length ; j++){
            console.log(arrData[i][j])
            row += (arrData[i][j] == null) ?  '"N/A",' : '"' + arrData[i][j]+ '",';
           }
           
           CSV += row + '\r\n'
       }
       
       
       //Initialize file format you want csv or xls
       var uri = 'data:text/csv;charset=utf-8,' + escape(CSV)

       var link = document.createElement("a")    
link.href = uri
           link.style = "visibility:hidden"
       link.download = fileName + new Date().toJSON().slice(0, 10) + ".csv"
       
       //this part will append the anchor tag and remove it after automatic click
       document.body.appendChild(link)
       link.click()
       document.body.removeChild(link)
    }

function exportToPdf(ExportedData, header, fileName, fromDate, toDate , exportType, subDivision,outstandingAmount = null,isOutstanding = false,isEsuvidha = false) {

dynamicWidth = []
bodyToExtract = []

var indexes = header.split(',')

var widthPercent = 100 / indexes.length

    indexes.forEach(() => { dynamicWidth.push( widthPercent +  '%') })
    bodyToExtract.push(indexes)

    ExportedData.forEach((values, index) => {
        var temp = []
        values.forEach((val, index) => {
        if (val == null) temp.push('N/A')
            else {            
            if (typeof val === 'string' || val instanceof String) {
            if (val.match(dateRegEx))
            val = val.split('-').reverse().join('/')
            }
           
            temp.push(val)
            }
        })

        bodyToExtract.push(temp)
    })
    if(isOutstanding){
    printOutstandingPdf(fileName, outstandingAmount, exportType, subDivision)
    }else if(isEsuvidha){
    printeSuvidhaPdf(fileName, fromDate, toDate, exportType, subDivision)
    }
    else{
    printPdf(fileName, fromDate, toDate, exportType, subDivision)
    }
   
}

function printeSuvidhaPdf(fileName, fromDate, toDate, exportType, subDivision) {

var startDate = "", endDate = ""
try {

if (fromDate.includes('-') && toDate.includes('-')) {
fromDate = fromDate.split('-').reverse().join('/')
toDate = toDate.split('-').reverse().join('/')

startDate = { text: 'Start Date: ' + fromDate , style: 'normalText'}
endDate = { text: 'End Date: ' + toDate , style: 'normalText'}
} else {

startDate = { text: 'Month: ' + MONTHS[parseInt(fromDate) - 1] , style: 'normalText'}
endDate = { text: 'Year: ' + toDate , style: 'normalText'}
}
} catch(err) {
fromDate = null
toDate = null
}

var currentDate = new Date()

var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;

    var yyyy = currentDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
   
    var docDefinition = {

pageSize: 'A2',
        pageOrientation: 'landscape',
        footer: function (currentPage, pageCount) {
            return {
                margin: 10,
                columns: [
                    {
                        fontSize: 9,
                        text: [
                            {
                                text: '------------------------------------------------------------------------------------------------------------------------------------------------------' +
                                    '\n',
                                margin: [0, 20]
                            },
                            {
                                text: '© Assam Power Distribution Company Ltd.(R-APDRP Cell) (' + currentPage.toString() + ' of ' + pageCount + ')',
                            }
                        ],
                        alignment: 'center'
                    }
                ]
            };

        },
        content: [
        { image: 'data:image/jpeg;base64'+ imageURI, margin: [768,-30,0,10], width: 50, height: 50 },
        { text: 'Assam Power Distribution Company Limited', style: 'header' },
        { text:  'ELECTRICAL SUB-DIVISION/IRCA : '+subDivision, style: 'subheaderCenter' },
        { text:  'CIN : U40109AS2003SGC007242', style: 'subheaderCenter' },
        { text:  'GSTIN : 18AABCL1354J1ZJ', style: 'subheaderCenter' },
            { text:  exportType + ' Summary', style: 'reportTitle' },
            startDate,
            endDate,
{ text: 'Generated Date: ' + today  + ' ' + currentDate.toLocaleTimeString() , style: 'normalText'},
{
                style: 'tableExample',
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex === 0) ? '#c2dec2' : null;
                    }
                },
                table: {
                    headerRows: 1,
                    widths: dynamicWidth,
                    body: bodyToExtract
                }
            }
        ],
        styles: {
            customStyle: {
                bold: true
            },
            header: {
                fontSize: 14,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            subheaderCenter: {
                fontSize: 10,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            normalText: {
            fontSize: 10,
                margin: [0, 0, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 5, 0],
                alignment: 'center',
                fontSize: 10,
            },
            reportTitle: {
            fontSize: 10,
                alignment: 'center',
                margin: [0, 0, 0, 15]
            }
        },
    };

    var pdf = createPdf(docDefinition);
    pdf.download(fileName + '.pdf');
}

function printPdf(fileName, fromDate, toDate, exportType, subDivision) {


var startDate = "", endDate = ""
try {

if (fromDate.includes('-') && toDate.includes('-')) {
fromDate = fromDate.split('-').reverse().join('/')
toDate = toDate.split('-').reverse().join('/')

startDate = { text: 'Start Date: ' + fromDate , style: 'normalText'}
endDate = { text: 'End Date: ' + toDate , style: 'normalText'}
} else {

startDate = { text: 'Month: ' + MONTHS[parseInt(fromDate) - 1] , style: 'normalText'}
endDate = { text: 'Year: ' + toDate , style: 'normalText'}
}

} catch(err) {
fromDate = null
toDate = null
}

var currentDate = new Date()

var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;

    var yyyy = currentDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
   
    var docDefinition = {

pageSize: 'A4',
        pageOrientation: 'landscape',
        footer: function (currentPage, pageCount) {
            return {
                margin: 10,
                columns: [
                    {
                        fontSize: 9,
                        text: [
                            {
                                text: '------------------------------------------------------------------------------------------------------------------------------------------------------' +
                                    '\n',
                                margin: [0, 20]
                            },
                            {
                                text: '© Assam Power Distribution Company Ltd.(R-APDRP Cell) (' + currentPage.toString() + ' of ' + pageCount + ')',
                            }
                        ],
                        alignment: 'center'
                    }
                ]
            };

        },
        content: [
        { image: 'data:image/jpeg;base64'+ imageURI, margin: [355,-30,0,10], width: 50, height: 50 },
        { text: 'Assam Power Distribution Company Limited', style: 'header' },
        { text:  'ELECTRICAL SUB-DIVISION/IRCA : '+subDivision, style: 'subheaderCenter' },
        { text:  'CIN : U40109AS2003SGC007242', style: 'subheaderCenter' },
        { text:  'GSTIN : 18AABCL1354J1ZJ', style: 'subheaderCenter' },
            { text:  exportType + ' Summary', style: 'reportTitle' },
            startDate,
            endDate,
{ text: 'Generated Date: ' + today  + ' ' + currentDate.toLocaleTimeString() , style: 'normalText'},
{
                style: 'tableExample',
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex === 0) ? '#c2dec2' : null;
                    }
                },
                table: {
                    headerRows: 1,
                    widths: dynamicWidth,
                    body: bodyToExtract
                }
            }
        ],
        styles: {
            customStyle: {
                bold: true
            },
            header: {
                fontSize: 14,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            subheaderCenter: {
                fontSize: 10,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            normalText: {
            fontSize: 10,
                margin: [0, 0, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 5, 0],
                alignment: 'center',
                fontSize: 10,
            },
            reportTitle: {
            fontSize: 10,
                alignment: 'center',
                margin: [0, 0, 0, 15]
            }
        },
    };

    var pdf = createPdf(docDefinition);
    pdf.download(fileName + '.pdf');
}
function printOutstandingPdf(fileName, outstandingAmount, exportType, subDivision) {

var outText = null;
var pageSizeVer = null;
if(typeof(outstandingAmount) == "object"){
outText = { text: 'Financial Year: ' + outstandingAmount.year , style: 'normalText'}
pageSizeVer = 'A4';
}else{
if (outstandingAmount != null) {
outText = { text: 'Outstanding Amount: ' + outstandingAmount , style: 'normalText'}
pageSizeVer = 'A2';
}
}


var currentDate = new Date()

var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;

    var yyyy = currentDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
   
    var docDefinition = {

pageSize: pageSizeVer,
        pageOrientation: 'landscape',
        footer: function (currentPage, pageCount) {
            return {
                margin: 10,
                columns: [
                    {
                        fontSize: 9,
                        text: [
                            {
                                text: '------------------------------------------------------------------------------------------------------------------------------------------------------' +
                                    '\n',
                                margin: [0, 20]
                            },
                            {
                                text: '© Assam Power Distribution Company Ltd.(R-APDRP Cell) (' + currentPage.toString() + ' of ' + pageCount + ')',
                            }
                        ],
                        alignment: 'center'
                    }
                ]
            };

        },
        content: [
        { image: 'data:image/jpeg;base64'+ imageURI, margin: [768,-30,0,10], width: 50, height: 50 },
        { text: 'Assam Power Distribution Company Limited', style: 'header' },
        { text:  'ELECTRICAL SUB-DIVISION/IRCA : '+subDivision, style: 'subheaderCenter' },
        { text:  'CIN : U40109AS2003SGC007242', style: 'subheaderCenter' },
        { text:  'GSTIN : 18AABCL1354J1ZJ', style: 'subheaderCenter' },
            { text:  exportType + ' Summary', style: 'reportTitle' },
            outText,
{ text: 'Generated Date: ' + today  + ' ' + currentDate.toLocaleTimeString() , style: 'normalText'},
{
                style: 'tableExample',
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        console.log(rowIndex, columnIndex)
                        return (rowIndex === 0) ? '#c2dec2' : null;
                    }
                },
                table: {
                    headerRows: 1,
                    widths: dynamicWidth,
                    body: bodyToExtract
                }
            }
        ],
        styles: {
            customStyle: {
                bold: true
            },
            header: {
                fontSize: 14,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            subheaderCenter: {
                fontSize: 10,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            normalText: {
            fontSize: 10,
                margin: [0, 0, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 5, 0],
                alignment: 'center',
                fontSize: 10,
            },
            reportTitle: {
            fontSize: 10,
                alignment: 'center',
                margin: [0, 0, 0, 15]
            }
        },
    };

    var pdf = createPdf(docDefinition);
    pdf.download(fileName + '.pdf');
}



function getDataUri(url, callback) {
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
}

getDataUri('/cbs/img/logo.png', function(dataUri) {imageURI = dataUri });