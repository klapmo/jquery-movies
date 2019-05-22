$.ajax({
    url:"https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers",
    type:"GET",
    dataType:"json",
    headers:{
        "X-RapidAPI-Host":"movie-database-imdb-alternative.p.rapidapi.com",
        "X-RapidAPI-Key":"817727c1femsh4ad37d9893da0c1p191c97jsn161719c28b2f"
    },
    contentType:"application/json; charset=UTF-8",
    success:function(result){
        // Call Back function for result
        console.log(result.Search[1])
        for(let i=0; i < result.Search.length;i++){
            let movieTitle = result.Search[i].Title
            let year = result.Search[i].Year
            let type = result.Search[i].Type
            let poster = result.Search[i].Poster
            let imdbID = result.Search[i].imdbID
            $("#posters").append(`<div><img src="${poster}" alt="Poster"><h3>${movieTitle} (${year})</h3><p><ul><li>"It's a good Movie" -RottenTomatoes</li><li>Runtime: 120min</li></ul></p></div>`)
            $("#table").append(`<div><table><tr><td>${type}</td><td>${imdbID}</td></tr></table></div>`)
        }
    },
    error:function(error){
        console.log(error)
    }
});