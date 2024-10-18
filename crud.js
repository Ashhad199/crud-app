document.getElementById("add_form").addEventListener("submit", function(event)
    {   
        event.preventDefault();
  
     function getfunction() {
       

       let inputname = document.getElementById("nameinput").value;
    let inputcolor = document.getElementById("colorinput").value;
       let inputage = document.getElementById("ageinput").value;

  
       console.log("inputname: " + inputname + ", this is something: " + inputcolor + ", this is a number: " + inputage);

       var data = {
           name: inputname,
           color: inputcolor,
          age: inputage
        };

        console.log(data);
       
     }
        
        getfunction();

        sendtoAPI();

        function sendtoAPI(data){
            fetch( 'https://localhost:7221/api/Customers', { // Replace with your API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Telling the API to expect JSON data
                },
                body: JSON.stringify(data) // Convert JS object to JSON string
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // If the response is OK, return JSON data
                }
                throw new Error('Network response was not ok');
            })
            .then(data => {
                console.log('Success:', data); // Log the success message or handle it
                alert('Data successfully sent to API');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert('Error sending data to API');
            });
        }
    }
);

document.getElementById("update_form").addEventListener("submit", function(event) {

    event.preventDefault(); 

   
    function putfunction() {
        let updatename = document.getElementById("updatename").value;
        let updatecolor = document.getElementById("updatecolor").value;
        let updateage = document.getElementById("updateage").value;
        let updateid = document.getElementById("updateid").value; 
      
        var updata = {
            name: updatename,
            color: updatecolor,
            age: updateage,
            id: updateid
        };

       
        console.log(updata);

       
        fetch(`https://your-api-endpoint.com/resource/${updateid}`, {  
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(updata) 
        })
        .then(response => response.json()) 
        .then(data => {
            console.log('Update Successful:', data);
           
        })
        .catch(error => {
            console.error('Error during update:', error); 
            
        });
    }

    putfunction(); // Call the function after defining it
});


document.getElementById("delete_form").addEventListener("submit", function(event)
{

    event.preventDefault();

    function deletemethod()
    {
        
     let deleteid =  document.getElementById("delete-id").value;
     console.log("hellow world" + deleteid);

     var deletedata = 
     {
        id : deleteid
     }

     console.log(deletedata);

     fetch("https://api-name-endpoint.com/resources/${deleteid}",
         {
            method : "DELETE",
            header : {"content-type":"application/json"},
            body : JSON.stringify(deletedata)
         })

         .then(response => response.json())
         .then(data => {
            console.log('Update Successful:', data); 
        })

    }

    deletemethod();
})

    

 
