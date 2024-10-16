


  document.getElementById("add_form").addEventListener("submit",  
    function(event){

        event.preventDefault();

         alert("Hello World!");

         getfunction();
         function getfunction  (){
            console.log("sdadadadasd");
            let inputname;
            let inputcolor;
            let inputage;

            inputname = document.getElementById("nameinput").value;
            inputcolor = document.getElementById("colorinput").value;
            inputage = document.getElementById("ageinput").value;
            console.log("inputname + " +  inputname + " this is something "  + inputcolor + "this is a number" + inputage);
            var data = {
              name : inputname,
              color : inputcolor,
              age : inputage
            }

            console.log(data)
        }
        
        })




