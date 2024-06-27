$(document).ready(function () {


    
    $.ajax({
        type: "get",
        crossDomain: true,
        
        url: "https://api.themoviedb.org/3/discover/movie?api_key=bb3f6ee7da95555fb81b7c661b6aef82",
        dataType: "json",
        success: function (response) {
            
            $.map(response.results, function (movie, index){

                let img = document.createElement("img");

                img.src = `https://image.tmdb.org/t/p/w200`+ movie.poster_path;

                img.onclick = async function(){
                    let url = await movieTrailer(movie.title)

                    let id = url.split("=")[1]

                    document.querySelector("#streaming").setAttribute("videoid",id)
                    // console.log(url);
                    // alert(movie.title)
                };

                // let img = `<img 
                // src=${`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                // />`

                $("body").append(img)
            });
        },

        error: function (err) {

            console.log(err);
        }
    });

  

});