//Setting up to read the JSON
function buildBarchart (id)  {
    d3.json("samples.json").then(function(data){ 
    console.log(data)


//Setting variables to use in the website
    let samplevalues=data.samples.map(info=>info.sample_values);
    let otuID=data.samples.map(info=>info.otu_ids);
    let otulabel=data.samples.map(info=> info.otu_labels);
    let metaData=data.metadata
    let samples=data.samples

//Filtering the data to populate the graph   
    const filtered = metaData.filter(metaDatavalue => metaDatavalue.id==id);
    const filteredSamples = samples.filter(filteredsamplevalues => filteredsamplevalues.id==id);
    console.log (filteredSamples);


//Slicing out the top ten items in the filteredSamples
    var otuids = filteredSamples[0].otu_ids.slice(0,10);
    var otuidsstring=[];

 
//checking the output
    console.log (otuids);

    otuidsstring=otuids.map(e=>`OTU ${e}`);

//set up the trace to populate the graph
    let trace1 = {
        type: "bar",
        orientation: "h",
        x: filteredSamples[0].sample_values.slice(0,10),
        y: otuidsstring
    };

    let layout={
        barmode: "group",
        
    };
    let bardata= [trace1];
    Plotly.newPlot("bar", bardata, layout);
})};

  
//Table code below
function buildTable(id) {
    d3.json("samples.json").then(function(data) {
        console.log(data);
    
    //Setting variables to use in the website
        let metaData=data.metadata
    
    //Filtering the data to populate the graph   
        const filtered = metaData.filter(metaDatavalue => metaDatavalue.id==id);
    var element = filtered[0]
    
    //Does this need to be in a list that can be cleared out with panel.empty() after each new user input?


    var panel = d3.select("#sample-metadata");
    panel.append('h6').text(`id: ${element.id}`);
    panel.append('h6').text(`ethnicity: ${element.ethnicity}`);
    panel.append('h6').text(`gender: ${element.gender}`);
    panel.append('h6').text(`age: ${element.age}`);
    panel.append('h6').text(`location: ${element.location}`);
    panel.append('h6').text(`bbtype: ${element.bbtype}`);
    panel.empty();
    }
    )};



function buildBubblechart(id) {
    d3.json("samples.json").then(function(data) {
        console.log(data);
     
    // Setting variables to use in the website
        // let samplevalues=data.samples.map(info=>info.sample_values);
        let otulabel=data.samples.map(info=> info.otu_labels);
        let metaData=data.metadata
        let samples=data.samples
        
       
    
    //Filtering the data to populate the graph   
        const filtered = metaData.filter(metaDatavalue => metaDatavalue.id==id);
        const filteredSamples = samples.filter(filteredsamplevalues => filteredsamplevalues.id==id);
        console.log (filteredSamples);
    
    
    //Slicing out the top ten items in the filteredSamples
        var otuids = filteredSamples[0].otu_ids;
        var otulabels = filteredSamples[0].otu_labels;
        var samplevalues=filteredSamples[0].sample_values;
        
    
        var trace3 = {
            x: otuids,
            y: samplevalues,
            text: otulabels,
            mode: 'markers',
            marker: {
              color: otuids,
              size: samplevalues
            }
          };
          
          
          var data = [trace3];
          
          console.log(data)
          var layout = {
            title: 'Bubble Chart Hover Text',
            showlegend: false,
            height: 600,
            width: 600
          };
          
          Plotly.newPlot('bubble', data, layout);

    })};

//function that updates the 940 to the user input values
// fuction optionChanged (variable) that takes the variable that is the user input to replace 940   

d3.select("selDataset") 


//this function wraps the previous three and deploys them with updates from the user input dropdown menu. 
function optionChanged(id) {
    
    buildBarchart(id);
    buildBubblechart(id);
    buildTable(id);
  }
optionChanged(950);

//    // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
//     var dataset=id
    // does this bunch of updating code need to be insde the init() function?
    //The var dataset=id sets up the user input to be the argument in the buildBubblechart, etc. functions.
    //The contents of the init() will need to be updated to reflect id as the new argument instead of the hardcoded 940. 


//issed for office hours: (1)getting the panel to clear out with each update and
//(2) getting the dropdown menu to display the array values (let names=data.names)