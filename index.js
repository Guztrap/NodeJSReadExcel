//TODO scape '


const fs = require('fs');
const xlsx = require('xlsx');
const format = require('string-format')
const workbook = xlsx.readFile('JCrew Attribute Final Passoff File.xlsx');

format.extend(String.prototype, {})

console.log('Reading excel');
var counter = 1;
xlsx.utils.sheet_to_json(workbook.Sheets['Document_TB12']).forEach(function(line){
    
});


function writeFile(archivo, data){
    fs.writeFile(archivo, JSON.stringify(data), function(err) {
      if(err) {
          return console.log(err);
      }
  
      console.log("The file was saved! " + archivo);
      return "Success";
    });
  }


  function writeFileArray(archivo, data){
      var file = fs.createWriteStream(archivo);

      file.on('error', function(err){
        console.log(err);
      })

      data.forEach(function(v){
          file.write(v + '\n');
      });

      file.end;
      console.log("The file was saved! " + archivo);
    };