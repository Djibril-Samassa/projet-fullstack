$( () =>{

    $("#btnShowData").click( function getAllCountries(res){

        $.ajax({
            url: 'https://restcountries.com/v3.1/all',
            success: function(res){
                for(let i = 0; i<=res.length;i++){
                        if( $("#searchbycountryname").attr("checked")){
                            $("#btnShowData").css("background-color","yellow");
                        }
                        else if( $("#searchbycityname").attr("checked")){
                            $("#btnShowData").css("background-color","green");
                        }
                }
            }
        });

    })
})