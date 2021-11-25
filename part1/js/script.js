/* 
File: script.js
GUI Assignment:  Creating an Interactive Dynamic Table using JQuery
Dunia Seidu, UMass Lowell Computer Science Student, dunia_seidu@student.uml.edu 
Copyright (c) 2021.  All rights reserved.  May be freely copied or 
excerpted for educational purposes with credit to the author. 
updated on November 23, 2021 at 9:23 AM 
Sources: https://www.w3schools.com/js/js_jquery_selectors.asp
*/

//implement jquery validation using .validate() function
$(document).ready(function(){

    //implement methods to check that the minimum rows and columns are less than maximum values
    
    //incomplete code block
    

    
    $('#inputform').validate({
       
        rules: {
            //check if each input value is filled and between the designated range of 50, -50
            mincolvalue: {
                required: true,
                range: [-50, 50]
            },
            maxcolvalue: {
                required: true,
                range: [-50, 50]
            },
            minrowvalue: {
                required: true,
                range: [-50, 50]
            },
            maxrowvalue: {
                required: true,
                range: [-50, 50]
            }
        },
        
        messages: {
            //print error messages describing issues
            mincolvalue: {
                required: 'This field is required.',
                range: 'Please enter an integer between 50 and -50'
            },
            maxcolvalue: {
                required: 'This field is required.',
                range: 'Please enter an integer between 50 and -50'
            },
            minrowvalue: {
                required: 'This field is required.',
                range: 'Please enter an integer between 50 and -50'
            },
            maxrowvalue: {
                required: 'This field is required.',
                range: 'Please enter an integer between 50 and -50'
            }
        },
        
        submitHandler: function(_form) {
            alert("Submitted!");
            createTable();
        }
    });

    
});


function createTable(){

    // create variables to store row and column values
    var minRow = document.getElementById('min_row').value;
    var maxRow = document.getElementById('max_row').value;
    var minCol = document.getElementById('min_col').value;
    var maxCol = document.getElementById('max_col').value;
    
    //get table element in html file
    var printTable = document.getElementById("mux_table");
    var table = "";
    var i = 0;
    var j = 0;
    
    /* //check if values are valid numbers
    if(isNaN(minRow) || isNaN(maxRow) || isNaN(minCol) || isNaN(minCol)){
        document.getElementById("smallheader").innerHTML = 'Please reload page and enter a valid number into the fields.';
        document.getElementById("genTable").disabled = true;
       
    }

    //check if values are within the stated range
    if(minRow < -50 || minRow > 50 || maxRow < -50 || maxRow > 50 || minCol < -50 || minCol > 50 || maxCol< -50 || maxCol > 50){
        document.getElementById("smallheader").innerHTML = 'Please reload page and enter a valid number within 50 & -50 into the fields.';
        document.getElementById("genTable").disabled = true;
        return;
    } */
    
    //create table using html text
    try{
        
        for(i = minRow - 1; i <= maxRow; i++){
            table += "<tr>";
            for(j = minCol; j <= maxCol; j++){
                //create table header cells with x as divider
                if( i== minRow-1 && j == minCol){
                    table += "<th>x</th>";
                }
                if(i == minRow - 1){
                    table += "<th>" + j + "</th>";
                } else if (j == minCol){
                    table += "<th>" + i + "</th>";
                }else if(j == maxCol){
                    table += "<td>" + i * (j-1) + "</td>";
                    table += "<td>" + i * j + "</td>";
                }else{
                table += "<td>" + i * (j-1) + "</td>";
                }
            }
            table += "</tr>";
        }
    }

    //added finally statement to complete try..catch block. I implemented this as the error function I attempted was not working
    finally { 
        document.getElementById("errormsg").innerHTML = '';
    }

    //output to html document
    printTable.innerHTML = table;

}





