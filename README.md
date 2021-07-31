# Getting Started Here

This project is basically a widgets called tickers which shows the Data of NSE(nifty 50) stock excange .

[Live Demo of Webapp](https://kafqa-pse62bnqn-narendram224nm.vercel.app/)

##Tools & Technologies

| Tools  | Version |
| ------------- | ------------- |
| Reactjs  | 17.0.2  |
| Redux |7.2  |
| Immerjs | 9.0.5 |
| Material Ui | 4.12  |

This project si bootstrapped by CRA (create react app)

Before running the project you must install the Nodejs from its official download page
Nodejs downlaodable link How to download Nodejs](https://nodejs.org/en/download/)
 and setup the path 
  for ref goto the website 
[How to install Nodejs](https://www.guru99.com/download-install-node-js.html)


## For running the project make sure you are on the project root level.
and run the command 
## npm install (for installing the dependencies and pakcages)
 <b> For running run<b>
  </br>
npm start

## Available Scripts
In the project directory, you can run:
  
  There is only one page in the project and having more then 10 isolated component.
 # Here is the some of the screenshot
 ## State 1: 
 While loading the data of the table you will see a loader in the table body.
 and also see a toaster notification with message in the bottom left corner
 ![upload6_L](https://user-images.githubusercontent.com/35723915/127731851-614f8724-a43f-4e37-badf-00e24dc20db5.jpg)
## State 2: 
 After successfully fetch the data you will get the following screen.
![upload2](https://user-images.githubusercontent.com/35723915/127682432-e89220a7-5250-4877-a587-73814f2e3298.jpg)
  
  ## description of every atrributes of the table
  

  | Command | Description |
| --- | --- |
| `Symbol` | This field shows the exact sybol of stock listed in NSE |
| `Open` | This fiels shows the opening value of that stock when stockmarket opened on that day **haven't been**  |
| `Close` | This fiels shows the opening value of that stock when stockmarket opened on that day **haven't been**  |
| `Price or Last Trade` | This fiels shows the Last trading  value of that stock in intra day  **haven't been**  |
| `High` | This fiels shows the Maxmimum value of that stock when stockmarket opened on that day **haven't been**  |
| `Low` | This fiels shows the Minimum value of that stock when stockmarket opened on that day **haven't been**  |
| `Pre Close` | This fiels shows the Previous closed value of that stock when stockmarket close on previous day **haven't been**  |
| `Change` | This fiels shows the Changed value of that stock when stockmarket opened on that day  **Formula (last price - prev Close)**  |
| `% Change` | This fiels shows the percentage % changed value of that stock **prcentage of that change**  |
  
  
  ## Top 5 gainer tab
   
![upload3_g](https://user-images.githubusercontent.com/35723915/127682435-4d9d0ea7-72e1-4ebf-8da4-2fce3698ecf6.jpg)
  
  In the above page you can find the top 5 gainer of that day.
  In the gainer tab the same table si showing with only 5 highest gainer of that day.
  
  ## Top 5 loosed tab
  ![upload4_l](https://user-images.githubusercontent.com/35723915/127682440-84ef40d0-cf6a-4f64-b191-47caab61cc6d.jpg)
  In the above page you can find the top 5 loosed of that day.
  In the gainer tab the same table si showing with only 5 highest loosed of that day.
  
  ##Search Filter
  
![upload5_F](https://user-images.githubusercontent.com/35723915/127682448-42bcd972-1e51-4a38-80d7-1b7036a94c17.jpg)
  
  This is a input field which take Stock `Symbol` in this field and If the stock is match with input characters I will shows only filtered data.
  For clear the filter you can erase all the input text insrted into box.
  
  ##For Example
  I have typed<cip> in the input field text box.
  and After processing only filtered stock is showing on the table.
  
  For clear filter
  I have to remote all teh typed characters from input field.
 
 ## When the data not found you will get the table showing the text no data found 
 ![upload7_N](https://user-images.githubusercontent.com/35723915/127731943-322aef80-0518-40e9-a132-9ddeb800a0e2.jpg)

  checkout the above screenshot how the text look like whne data not found of the search filter.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




**Note: All the design and code developed by me "Narendra Kumar Maurya"**
