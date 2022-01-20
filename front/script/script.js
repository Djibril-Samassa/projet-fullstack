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


    $("#btnSearchCountry").click( function checkCountry (res){

        $("#btnSearchCountry").css("background-color","red"),
        $.ajax({
            url: 'https://restcountries.com/v3.1/all',
            success: function(res){
                for(let i = 0; i<=res.length;i++){
                    if( $("#searchCountry").val() = res[i].name.common){
                        $("#btnSearchCountry").css("background-color","red")
                    }
                }
            }
        });

    })

})