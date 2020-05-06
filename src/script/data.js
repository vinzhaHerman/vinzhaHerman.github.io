var data = [
    {
        "id": "0001",
        "thumb": "./src/img/bumimandiri.png",
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
        "tools": [" HTML", " CSS", " Javascript", " Bootstrap", " PHP", " Codeigniter", " MySQL"],
        "helper": [" Animate.css", " Slick.js", " Creative Tim", " Bootstrap datepicker"],
        "repo": "https://github.com/vinzhaherman/bumimandiri",
        "link": "https://bumimandiri.000webhostapp.com",
        "img":{
            "img1": "./src/img/bm1.png",
            "img2": "./src/img/bm2.png",
            "img3": "./src/img/bm3.jpg",
            "img4": "./src/img/bm4.jpg",
            "img5": "./src/img/bm5.png"
        },
        "status": "offline",
        "projectType": "Business"
    },
    {
        "id": "0002",
        "thumb": "./src/img/sap.png",
        "title": "SING APIK HIGHSCHOOL",
        "desc": "Is a web application for school to provide information for students and also my very first web project.",
        "features": [
            "Login [admin]", 
            "profile [admin]", 
            "dashboard [admin]", 
        ],
        "tools": [" HTML", "CSS", "Javascript", "PHP", "Codeigniter", "MySQL"],
        "helper": ["none"],
        "repo": "https://github.com/vinzhaherman/sing-apik-highschool",
        "link": "javascript:void(0)",
        "img":{
            "img1": "./src/img/sap1.png",
            "img2": "./src/img/sap2.jpg",
            "img3": "./src/img/sap3.png",
            "img4": "./src/img/sap4.png",
            "img5": "./src/img/sap5.png"
        },
        "status": "offline",
        "projectType": "Personal"
    },
    {
        "id": "0003",
        "thumb": "./src/img/nye.png",
        "title": "NYETAKIN",
        "desc": "Is an E-commerce market place built with wordpress and woocommerce",
        "features": [
            "Login [admin/customer/seller]", 
            "profile [admin/customer/seller]", 
            "dashboard [admin/seller]", 
            "Shopping cart"
        ],
        "tools": ["Wordpress", "HTML", "CSS", "Javascript", "PHP", "MySQL"],
        "helper": ["Wordpress", "woo-comerce"],
        "repo": "javascript:void(0)",
        "link": "javascript:void(0)",
        "img":{
            "img1": "./src/img/nyt1.png",
            "img2": "./src/img/nyt2.png",
            "img3": "./src/img/nyt3.png",
            "img4": "./src/img/nyt4.png",
            "img5": "./src/img/nyt5.png"
        },
        "status": "offline",
        "projectType": "Personal"
    },
    {
        "id": "0004",
        "thumb": "./src/img/poot.png",
        "title": "POOTIS IN STORE",
        "desc": "My first React project. Includes state management using context API. This project is based from tutorial by Traversy Media and i modified it and add more functionality",
        "features": [
            "Shopping cart",
            "Paypal Checkout"
        ],
        "tools": ["HTML", "CSS", "Javascript", "React", "MDBootstrap"],
        "helper": ["Material Design Bootstrap", "Paypal React"],
        "repo": "https://github.com/vinzhaherman/pootis-store",
        "link": "https://pootis-in-store.netlify.com",
        "img":{
            "img1": "./src/img/poot1.png",
            "img2": "./src/img/poot2.png",
            "img3": "./src/img/poot3.png",
            "img4": "./src/img/poot4.png",
            "img5": "./src/img/poot5.png"
        },
        "status": "online",
        "projectType": "Personal"
    }
];




// var tab1 = document.getElementById('tb_1');
// var tab2 = document.getElementById('tb_2');
// var tab3 = document.getElementById('tb_3');
// tab1.addEventListener('click', function(){
//     document.getElementById('content_1').innerHTML = "";
//     let result = data.map(el => {
//         return `<div class="gallery-item">
//                     <div class="gallery-content"><img src="${el.thumb}" alt="" class="photo"></div>
//                     <div class="gal-opt">
//                         <button class="modaltrigger btn-reset opt-detail" data-modal="${el.id}"><i class="material-icons"> info </i></button>
//                         <a href="${el.repo}" class="opt-git"><i class="material-icons"> folder </i></a>
//                     </div>
//                 </div>`;
//     });
//     document.getElementById('content_1').innerHTML = result.join(' ');
// });

// tab2.addEventListener('click', function(){
//     document.getElementById('content_1').innerHTML = "";
//     let filterData = data.filter(e => e.projectType === "Personal");
//     let result = filterData.map(el => {
//         return `<div class="gallery-item">
//                     <div class="gallery-content"><img src="${el.thumb}" alt="" class="photo"></div>
//                     <div class="gal-opt">
//                         <button class="modaltrigger btn-reset opt-detail" data-modal="${el.id}"><i class="material-icons"> info </i></button>
//                         <a href="${el.repo}" class="opt-git"><i class="material-icons"> folder </i></a>
//                     </div>
//                 </div>`;
//     });
//     document.getElementById('content_1').innerHTML = result.join(' ');
// });

// tab3.addEventListener('click', function(){
//     document.getElementById('content_1').innerHTML = "";
//     let filterData = data.filter(e => e.projectType === "wip");
//     let result = filterData.map(el => {
//         return `<div class="gallery-item">
//                     <div class="gallery-content"><img src="${el.thumb}" alt="" class="photo"></div>
//                     <div class="gal-opt">
//                         <button class="modaltrigger btn-reset opt-detail" data-modal="${el.id}"><i class="material-icons"> info </i></button>
//                         <a href="${el.repo}" class="opt-git"><i class="material-icons"> folder </i></a>
//                     </div>
//                 </div>`;
//     });
//     document.getElementById('content_1').innerHTML = result.join(' ');
// })





var res = data.map(el => {
    return `<div class="gallery-item">
                <div class="gallery-content"><span class="modaltrigger" data-modal="${el.id}"><img src="${el.thumb}" alt="" class="photo"></span></div>
                <div class="gal-opt">
                    <button class="modaltrigger btn-reset opt-detail" data-modal="${el.id}"><i class="material-icons"> info </i></button>
                    <a href="${el.repo}" target="_blank" class="opt-git"><i class="material-icons"> folder </i></a>
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
        document.getElementById('repo').setAttribute("href", modalData[0].repo)
        document.getElementById('linkToWeb').setAttribute("href", modalData[0].link);
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
