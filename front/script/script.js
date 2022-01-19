$( () =>{

    $("#btnShowData").click( function getAllCountries(res){

        $.ajax({
            url: 'https://restcountries.com/v3.1/all',
            success: function(res){
                for(let i = 0; i<=res.length;i++){
                        if( $("#cherchCountry").val() == res[i].name.common){
                            $(".countries_name").append(`<li>${res[i].name.common} <b> Capitale: </b>${res[i].capital}</li>`)
                            return;
                        }

                        else if( $("#cherchCountry").val() == res[i].capital){
                            $(".countries_name").append(`<li>${res[i].capital} <b> Pays: </b>${res[i].name.common}</li>`)
                            return;
                        }
                    
                }
            }
        });

    })
})