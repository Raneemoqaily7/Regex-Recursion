
/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s){
     let valid =  /[A-Za-z]A$/
    return valid.test(s)
}
/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email){

    let valid=/[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.\io/;
    return valid.test(email)
}

/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 

required extention are jpg, jpeg and png.

*/

function imagesSearcher(text){
    let arr = [];
    // Add your logic.
    return arr
}

