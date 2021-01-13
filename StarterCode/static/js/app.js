d3.json("samples.json").then(function(data) {
    console.log(data);

    let samplevalues=data.samples.map(info=>info.sample_values);
    let otuID=data.samples.map(info=>info.otu_ids);
    let otulabel=data.samples.map(info=> info.otu_labels);
    let metaData=data.metadata
    let samples=data.samples

   // console.log(samplevalues.slice(0,10));
    //console.log(otuID.slice(0,10));
    //console.log(otulabel);

    const filtered = metaData.filter(metaDatavalue => metaDatavalue.id==940);
    //console.log(filtered[0].ethnicity)
//Line 15 is demonstrating how to access the data inside the array returned by the filter. It's encased in a peel of the
//array formatting and you have to use [0] to take the peel off and reveal the dictionary inside, which can then have its
//information accessed by the .ethnicity, which is calling the key that corresponds to the value "caucasion"


    const filteredSamples = samples.filter(filteredsamplevalues => filteredsamplevalues.id==940);
    console.log (filteredSamples);
    
    //const filteredotuID = otuID.filter(filteredotuIDvalues=>fitleredotuIDvalues.id=-940)
    //console.log(filteredSamples[0].sample_values.slice(0,10))

    var otuids = filteredSamples[0].otu_ids.slice(0,10);
    var otuidsstring=[];

// append the variable in line 28 by using the for loop in line 35 to populate the list otuidstring. then put the variable
//otuidstring into the y axis for trace1. It should populate the graph. 

    console.log (otuids);


    for (const property in otuids) {
        console.log(`OTU ${otuids[property]}`);
      }

    let trace1 = {
        type: "bar",
        orientation: "h",
        x: filteredSamples[0].sample_values.slice(0,10),
        y: otuidstring
    };

    let layout={
        barmode: "group",
        
    };
    let bardata= [trace1];

    Plotly.newPlot("bar", bardata, layout);

});




// /* global Plotly */
// d3.json("samples.json").then(function(data) {
//          console.log(data)});

// /**
//  * Helper function to select stock data
//  * Returns an array of values
//  * @param {array} rows
//  * @param {integer} index
//  * index 0 - Date
//  * index 1 - Open
//  * index 2 - High
//  * index 3 - Low
//  * index 4 - Close
//  * index 5 - Volume
//  */
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function buildPlot() {
//   d3.json(samples).then(function(data) {

//     // Grab values from the data json object to build the plots
//     var name = data.dataset.names[0];
//     var metaData = data.dataset.metadata[1];
//     // var startDate = data.dataset.start_date;
//     // var endDate = data.dataset.end_date;
//     // var dates = unpack(data.dataset.data, 0);
//     // var closingPrices = unpack(data.dataset.data, 4);

//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: "test",
//       x: name,
//       y: metaData,
//       line: {
//         color: "#17BECF"
//       }
//     };

//     var data = [trace1];

//     var layout = {
//       title: `trying`,
//       xaxis: {
//         range: [name, metaData],
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);

//   });
// }

// buildPlot();
