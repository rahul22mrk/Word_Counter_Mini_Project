let textBox = document.getElementById("textbox");
//it is select our textArea

textBox.addEventListener('input', function() {
    var text = this.value;
    //select the text from textArea

    let char = text.length;
    //length of text

    document.getElementById("char").innerHTML = char;
    //this is counting of characters

    text = text.trim();
    //trim() function remove extra space from starting an end 

    let word = text.split(' ');
    //it is split our string into array 

    //because extra space count na ho isliye hm yaha filter kr rahe hai
    let cleanList = word.filter(function(elm) {
        return elm != ""; //blank element return nahi hoga

    });

    document.getElementById("word").innerHTML = cleanList.length;
    //count the words

});