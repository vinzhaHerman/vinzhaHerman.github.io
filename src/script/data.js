var data = [
    {
        "id": "0001",
        "thumb": "./src/img/mixed.png",
        "title": "BUMI MANDIRI",
        "desc": "Is a web application for booking/reservation.",
        "features": [
            "Login [admin/customer]", 
            "profile [admin/customer]", 
            "dashboard [admin]", 
            "Sales Report [admin]", 
            "Reservation history [customer]",
            "Reservation cancelation [customer]",
            "Forgot Password [customer]"
        ],
        "tools": ["HTML", "CSS", "Javascript", "Bootstrap", "PHP", "Codeigniter", "MySQL"],
        "helper": ["Animate.css", "Slick.js", "creative tim", "Bootstrap datepicker"],
        "repo": "https:/github.com/cinzhaherman/bumimandiri",
        "link": "",
        "img":{
            "img1": "./src/img/bm1.png",
            "img2": "./src/img/bm2.png",
            "img3": "./src/img/bm3.jpg",
            "img4": "./src/img/bm4.jpg",
            "img5": "./src/img/bm5.png"
        },
        "status": "offline"
    },
    {
        "id": "0002",
        "thumb": "./src/img/school.png",
        "title": "SING APIK HIGHSCHOOL",
        "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, quibusdam.",
        "features": [
            "Login [admin]", 
            "profile [admin]", 
            "dashboard [admin]", 
        ],
        "tools": ["HTML", "CSS", "Javascript", "PHP", "Codeigniter", "MySQL"],
        "helper": ["none"],
        "repo": "javascript:void(0)",
        "link": "javascript:void(0)",
        "img":{
            "img1": "./src/img/sap1.png",
            "img2": "./src/img/sap2.png",
            "img3": "./src/img/sap3.png",
            "img4": "./src/img/sap4.png",
            "img5": "./src/img/sap5.png"
        },
        "status": "offline"
    },
    {
        "id": "0003",
        "thumb": "./src/img/nyetakin.png",
        "title": "NYETAKIN",
        "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, quibusdam.",
        "features": [
            "Login [admin/customer/seller]", 
            "profile [admin/customer/seller]", 
            "dashboard [admin/seller]", 
            "Shopping cart"
        ],
        "tools": ["Wordpress", "HTML", "CSS", "Javascript", "PHP", "MySQL"],
        "helper": ["Wordpress", "woocomerce"],
        "repo": "javascript:void(0)",
        "link": "javascript:void(0)",
        "img":{
            "img1": "./src/img/sap1.png",
            "img2": "./src/img/sap2.png",
            "img3": "./src/img/sap3.png",
            "img4": "./src/img/sap4.png",
            "img5": "./src/img/sap5.png"
        },
        "status": "offline"
    }
];





var res = data.map(el => {
    return `<div class="gallery-item">
                <div class="gallery-content"><img src="${el.thumb}" alt="" class="photo"></div>
                <div class="gal-opt">
                    <button class="modaltrigger btn-reset opt-detail" data-modal="${el.id}"><i class="material-icons"> info </i></button>
                    <a href="${el.repo}" class="opt-git"><i class="material-icons"> folder </i></a>
                </div>
            </div>`;
});
document.getElementById('content_1').innerHTML = res.join(' ');





let list = document.getElementById("pvFeature");
var mt = document.querySelectorAll('.modaltrigger');
var mo = document.getElementById('md-overlay');
var mc = document.getElementById('modalClose');
for (let i = 0; i < mt.length; i++) {
    mt[i].addEventListener('click', function(){
        let id = this.getAttribute('data-modal');
        let modalData = data.filter(item => item.id === id);
        console.log(JSON.stringify(modalData));

        mo.style.display = "block";

        document.getElementById('pvTitle').innerHTML = modalData[0].title;
        document.getElementById('pvDesc').innerHTML = modalData[0].desc;

        document.getElementById('pv1').src=modalData[0].img.img1;
        document.getElementById('pv2').src=modalData[0].img.img2;
        document.getElementById('pv3').src=modalData[0].img.img3;
        document.getElementById('pv4').src=modalData[0].img.img4;
        document.getElementById('pv5').src=modalData[0].img.img5;

        
        for (let i = 0; i < modalData[0].features.length; i++) {
            let val = modalData[0].features[i];
            let el = document.createElement("li");
            el.textContent = val;
            list.appendChild(el);
        }

        document.getElementById('pvTools').innerHTML = modalData[0].tools;
        document.getElementById('pvHelper').innerHTML = modalData[0].helper;
    });
    
}

mc.addEventListener('click', function(){
    mo.classList.add("fadeOut");
    setTimeout(function(){
    	mo.classList.remove("fadeOut");
        mo.style.display = "none";
        while (list.hasChildNodes) {
            list.removeChild(list.firstChild);
        }
    }, 500);
})
