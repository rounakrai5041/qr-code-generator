/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"

inquirer
    .prompt([
        {
            message: "enter URL",
            name: "URL"

        }
    ])
    .then((answers) => {
        var url = answers.URL
        var qr_svg = qr.image(url, { type: 'svg' });
        qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'))
        fs.writeFile('mynewfile3.txt', url, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });


    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
