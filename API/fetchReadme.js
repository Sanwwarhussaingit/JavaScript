fetch("json/student_data.json")
    .then(function (response) 
    {
        return response.json();
    })
    .then(function (data) 
    {
        for (const student of data) {
           
            console.log(student);
            // console.log(`Name: ${student.name} Age: ${student.age} City: ${student.city}\n`);
        }
    })
    .catch(function (error) 
    {
        console.error("Error fetching the data:", error);
    });
