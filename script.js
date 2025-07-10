let profilepic = document.getElementById("profilepic");

profilepic.addEventListener("click", () => {
    profilepic.classList.toggle("enlarged");

    // Optional: Close when clicking anywhere else on the page
    document.addEventListener('click', function closeEnlarged(e) {
        if (!profilepic.contains(e.target)) {
            profilepic.classList.remove("enlarged");
            document.removeEventListener('click', closeEnlarged);
        }
    });
});

// array of link and the icons

let links = [
    "https://www.facebook.com/soham.bhattacharya.19441",
    "https://www.instagram.com/bhattacharya_soham.72/",
    "https://x.com/SohamBhatt84437",
    "https://github.com/Learnerbypassion",
    "https://www.linkedin.com/in/soham-bhattacharya-880523363/",
    "https://www.geeksforgeeks.org/user/soham21u2ix/"
];

let icons = [
    "https://img.icons8.com/?size=100&id=118468&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=32292&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000",
    "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    "https://img.icons8.com/?size=100&id=447&format=png&color=000000",
    "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/geeksforgeeks-jxgndwoxrvxf8j7gfb3z.png/geeksforgeeks-2md8tvjixjpy9d7994wzr.png?_a=DATAdtAAZAA0"
]

// change in the links
let linkOfhandels = document.getElementById("links");
let s = "";
for (let i = 0; i < links.length; i++) {
    s += ` <a href="${links[i]}" target="_blank"><img src="${icons[i]}" alt=""></a>`
}
linkOfhandels.innerHTML = s;

// certificates
let certificates = ["c1.jpg","c2.jpg","c3.jpg","c4.jpg","c5.jpg","c6.jpg"];
let cirdownlinks =[
    "https://api101.ilovepdf.com/v1/download/hd118vx329Az0g9651ydqzlgsln65cqj97qA7k91kzs9mA6fc32g6yyt14pg76mvg8kyk1xm8rtddb0b789yvk3xcf5bA0v1dsn261vw8gnp45dkf0zq8bkA7Ak9vhqvj3g0515s3dgfy3gyxfb1rksh47rnbh4ht155ffb9kbs70yq7dry1",
    "https://www.ilovepdf.com/download/tkAgsbtr0sbjnfh14j41tp7h9vz6nb5z0s0rsrpnzqdz2yh52l65szjmrb07snv5d1vss3zvrbxzxAdwkl4mzhpsxgc10A70th8gxxyc2vAq34A4199vnp8A5ppyl2q67fcllym6g03Aly0zyrp79jkzy33q3y0sv3nAjdbc6rAfcgdnrzzq/85",
    "https://www.ilovepdf.com/download/1w4hh7ryjdh8tllfnws4ldzb0hv8662p6dc4bzkz30434r4htb016A6vbs9gccAj2d5zlApkmq8y5kp8A3c2kymp0ntbv4g6qxpzxfjmnyk7r50Am9jyhf8cp8j7l39fyg64vAz9xkkgk21ysxtctcmlhpv8dbvpq0v8cyb0twbg0bkyvA11/19",
    "https://www.ilovepdf.com/download/ns1zwxgfgbxt34qAncA3dr2nmzbg8z07l7d6t3rpbd81bdxt0g83h3Atj3fyt3b3ymcwvl93nAwq0t1yA3w6208xvl7vb7059ysmlcf86h5lyt9cvyn3h289z5v41g80cwj3fk08ltbtcfj7r6bhv6szjrwnyr3bwmAfsy9sgA0mhg4n8cd1/112",
    "https://www.ilovepdf.com/download/l757rpq3rdwb4x55t51sfjq3d54cds4xbcv4ndztrdxbbx6ns46knxhd32nAmhkAgxkt3xm1w9ck8p6cq0c35nmw7pb19kymfr6wxy3pA9k701A8j4kxxrf74nvg64Acn9jp28rymsd1zd1shpc5lm3d97zx0bp2zdhdg1gzx300f280ts3q/59",
    "https://www.ilovepdf.com/download/0qg6fb2sn2bAwtlrzb1x4vbk7j0pnzz4ydz6b8htt69ypywAp9zAj44vlfbh0gy2z39ptz2hng0zj1cdvm9wzs8q0dh0q8qzAl0pqz3wf3hfttfm7znjc6t02jv34phzj19djAw3A797q5992z0fhfpv9tj1dxcl1kr6qwAj0z5yk369xck1/68"
];
let str="";
let cir = document.getElementById("cirTi");
for(let i=0;i<certificates.length;i++){
    str += `<div class="certificates"><a href="${cirdownlinks[i]}" target="_blank"><img src="${certificates[i]}"></a></div>`;
}
cir.innerHTML = str;

// animation
    var typed = new Typed('#element', {
    strings: ['<h1>Favorite bands:-</h1>','<h1>Fossils</h>','<h1>Warfaze</h1>','<h1>Pink Floyd</h1>','<h1>The Beatles','<h1>Oasis','<h1>&amp; etc...'],
    typeSpeed: 50,
});
