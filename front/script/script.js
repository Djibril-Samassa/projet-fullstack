$( () =>{

    $("#btnShowData").click( function getAllCountries(res){

        $.ajax({
            url: 'https://restcountries.com/v3.1/all',
            success: function(res){
                for(let i = 0; i<=res.length;i++){
                    $(".countries_name").append(`<li>${res[i].name.common}</li>`)
                }
            }
        });

    })

    if( $("#searchbycountryname").checked){
        $("#btnShowData").css("background-color","yellow");
    }
    
    else if( $("#searchbycityname").checked){
        $("#btnShowData").css("background-color","green");
    }
})