console.log("hallo world");
// ==== typing =====
const words = ["Hallo Wellcome", "I am Usman "];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true; // Variable untuk mengontrol animasi pengetikan

const typingContainer = document.getElementById("insertText");
const lineElement = document.getElementById("line"); // Dapatkan elemen dengan id "line"
lineElement.innerText = "|";

function typeNextChar() {
    const word = words[wordIndex];
    typingContainer.textContent = word.substring(0, charIndex);
    charIndex++;

    if (charIndex > word.length) {
        charIndex = word.length;
        isTyping = false;
        setTimeout(deleteNextChar, 500); // Tunggu 0.5 detik sebelum menghapus karakter
    }
}

function deleteNextChar() {
    const word = words[wordIndex];
    typingContainer.textContent = word.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
        charIndex = 0;
        isTyping = true;
        wordIndex = (wordIndex + 1) % words.length;

        if (wordIndex === 0) {
            // Menghentikan looping ketika sudah selesai semua kata
            clearInterval(typingInterval);
            // Tampilkan kata terakhir
            typingContainer.textContent = words[words.length - 1];

            // Menonaktifkan elemen dengan id "line"
            lineElement.style.display = "none";

            // Menghilangkan elemen dengan id "line" dari dokumen
            lineElement.remove();
        }
    }
}

function animateText() {
    if (isTyping) {
        typeNextChar();
    } else {
        deleteNextChar();
    }
}

// Mulai animasi pertama kali
animateText();

// Set interval untuk mengatur perpindahan kata
const typingInterval = setInterval(animateText, 700);

// Set interval untuk menghentikan semua animasi kecuali animasi 'line' setelah kata terakhir
const stopAnimationInterval = setInterval(function () {
    if (wordIndex === words.length - 1 && !isTyping) {
        clearInterval(typingInterval); // Menghentikan animasi pengetikan
        clearInterval(stopAnimationInterval); // Menghentikan pengecekan
        document.getElementById("typing").style.animation = "none";
        document.getElementById("insertText").style.transition = "none";
        lineElement.remove("line");
    }
}, 1000);

// magnetic
$(".page-name-tombol").mouseleave(function (e) {
    TweenMax.to(this, 0.3, {
        height: 150,
        width: 300,
    });
    TweenMax.to(".circle", 0.3, {
        scale: 1,
        x: 0,
        y: 0,
    });
});

$(".page-name-tombol").mouseenter(function (e) {
    TweenMax.to(this, 0.3, {
        height: 150,
        width: 300,
    });
    TweenMax.to(".circle", 0.3, {
        scale: 1.3,
    });
});

$(".page-name-tombol").mousemove(function (e) {
    callParallax(e);
});

function callParallax(e) {
    parallaxIt(e, ".circle", 80);
}

function parallaxIt(e, target, movement) {
    var $this = $(".page-name-tombol");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 0.3, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
    });
}

// tahun
let currentYear = new Date().getFullYear();
document.querySelector(".copyright-year").textContent = currentYear;
