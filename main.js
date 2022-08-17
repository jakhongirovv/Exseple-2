let data;
let korzinOff = [];

function Keldi() {
    $.ajax("http://myjson.dit.upm.es/api/bins/d3ow", {
        success: (value) => {
            console.log(value.results.books);
            data = value.results.books
            Ekran(data)
        },
        error: (err) => {
            console.log(err);
        }

    })
}

Keldi()

function Ekran(a) {
    $("#row").html("")
    a.map((value, i) => {
        let cool = `
        <div class="col-3">
            <div class="card mt-4" id="cartochka">
            <b class="text-center mt-3 mb-2">${value.title}</b>
            <p class="text-center">${value.author}</p>
            <img class="ser_img" src="${value.book_image}" width="150" height="200" alt="rasim">
            <b class="text-center mb-3">USD:${value.weeks_on_list}</b>

            <div>
            <button class="ser_bt ms-4" onclick="korzin(${i})">Korzina</button>
            <button type="button" class="ser_bt ms-4" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Info
                    </button>
            </div>
            
            </div>
        </div>
        `

        $("#row").append(cool)
    })
}



function korzin(i) {
    korzinOff.push(data[i]);
    korzin_ekran(korzinOff);
    let s = korzinOff.length;

    $("#korzna").html(s)
}


function korzin_ekran(a) {
    $("#canvas").html("")
    a.map((value, i) => {
        let cool = `
        <div class="col-3">
            <div class="card" id="cartochka">
            <b class="text-center mt-3 mb-2">${value.title}</b>
            <p class="text-center">${value.author}</p>
            <img class="ser_img" src="${value.book_image}" width="150" height="200" alt="rasim">
            <b class="text-center mb-3">USD:${value.weeks_on_list}</b>

            
            
            </div>
        </div>
        `

        $("#canvas").append(cool)
    })
}

function qidir(a) {
    console.log(a);

    let yangiQidir = data.filter(v => {
        return v.author.toLowerCase().includes(a.toLowerCase())
    })

    Ekran(yangiQidir)
}