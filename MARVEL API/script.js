function allCharacters()
{
    $.ajax({
        type:'GET',
        url:'https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a',
        success: function(result){
            $(".heading").text("Marvel Characters");

            characters = result["data"]["results"];  
            console.log(characters);
            card= $("#cards-container");
            card.html("");
            console.log(card.html());
            for(i=0;i<characters.length;i++)
            {
                imgPath = characters[i]["thumbnail"]["path"] +'.'+ characters[i]["thumbnail"]["extension"];
                html = `<div class="card" style="width: 18rem;">
                    <img src=${imgPath} class="card-img-top">
                    <button href="#" class="btn btn-primary" onclick="show(${characters[i]["id"]})" style="width:136px;padding:10px;margin:10px">Description</button>
                    <div class="card-body" id="${characters[i]["id"]}" style="display:none;">
                    <h5 class="card-title">${characters[i]["name"]}</h5>
                    <p class="card-text">${characters[i]["description"]}</p>
                    </div>
                </div>`

                console.log(imgPath);
                card.append(html);
            }
            console.log(card.html());
        },
    });
}

function allComics()
{
    $.ajax({
        type:'GET',
        url:'https://gateway.marvel.com/v1/public/comics?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a',
        success: function(result){
            $(".heading").text("Comics");


            comics = result["data"]["results"];  
            console.log(comics);
            card= $("#cards-container");
            card.html("");
            console.log(card.html());
            for(i=0;i<comics.length;i++)
            {
                imgPath = comics[i]["thumbnail"]["path"] +'.'+ comics[i]["thumbnail"]["extension"];
                html = `<div class="card" style="width: 18rem;">
                    <img src=${imgPath} class="card-img-top">
                    <div class="card-body">
                    <h5 onclick="showDesc(${comics[i]["id"]})" class="card-title">${comics[i]["title"]}</h5>
                    <p id="${comics[i]["id"]}" style="display:none;" class="card-text">${comics[i]["description"]}</p>
                    </div>
                </div>`

                console.log(imgPath);
                card.append(html);
            }
            console.log(card.html());
        },
    });
}

function allCreators()
{
    $.ajax({
        type:'GET',
        url:'https://gateway.marvel.com/v1/public/creators?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a',
        success: function(result){
            $(".heading").text("Creators");

            creators = result["data"]["results"];  
            console.log(creators);
            card= $("#cards-container");
            card.html("");
            console.log(card.html());
            for(i=0;i<creators.length;i++)
            {
                html = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${creators[i]["fullName"]}</h5>
                    <p class="card-text">Number of Comics: ${creators[i]["comics"]["available"]}</p>
                    <p class="card-text">Number of Series: ${creators[i]["series"]["available"]}</p>
                    <p class="card-text">Number of Stories: ${creators[i]["stories"]["available"]}</p>
                    </div>
                </div>`

                card.append(html);
            }
            console.log(card.html());
        },
    });
}

function allSeries()
{
    $.ajax({
        type:'GET',
        url:'https://gateway.marvel.com/v1/public/series?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a',
        success: function(result){
            $(".heading").text("Marvel Series");

            series = result["data"]["results"];  
            console.log(series);
            card= $("#cards-container");
            card.html("");
            console.log(card.html());
            for(i=0;i<series.length;i++)
            {
                html = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${series[i]["title"]}</h5>
                    <p class="card-text">Start Year: ${series[i]["starYear"]}</p>
                    <p class="card-text">End Year: ${series[i]["endYear"]}</p>
                    <p class="card-text">Last Modified: ${series[i]["modified"]}</p>
                    </div>
                </div>`

                card.append(html);
            }
            console.log(card.html());
        },
    });
}

function show(btn)
{
    console.log($(`#${btn}`));
    $(`#${btn}`).toggle(500);
}

function showDesc(id)
{
    $(`#${id}`).toggle(500);
}

function defaultFunc()
{
    $(".heading").html("");
    $("#cards-container").html(
        `<div class="jumbotron">
        <h1>Welcome to <span style="color: red;">MARVELS</span> API</h1>
        <p>Here you can use the API to view certain information such as the Characters, Comics, Creators & Series.</p>
        </div>`
    )
}