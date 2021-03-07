Belly buttons are fascinating indentations (or extrusions) on the mammalian frame. What mysteries dwell within? Let's find out. We're using D3 and Plotly libraries, a JSON dataset, and JavaScript/HTML as the primary languages. 

This project explores the depth of the human navel by extracting and reformatting data from a scientific survey of the bacteriological residents of navels. Data includes metadata about the "donors" of the bacteria (age, gender, race, location, etc.), the reference number assigned to each species of bacteria, the name of the bacteria, and the numbers of each species of bacteria present. 

The data is parsed out and represented by the bubble chart, with the colors signifying each different species, and the size of the bubble proportionate to the size of that bacterial population. A panel on the side shows the demographic information of the "donor." 

There is a striking difference among these donors. Some folks have barely any bacteria going on; others have dozens of types and high numbers in the population. 

The data wrangling primarily utilizes JavaScript with D3 and Plotly libraries. This primarily involved accessing the data inside the samples.json dataset (through D3) and depends heavily on looping through the internal lists of that dataset, then anchoring the results into the HTML with div/tags. The result is a dynamic display that responds to the user input, showing one specific donor's bacterial population. 
