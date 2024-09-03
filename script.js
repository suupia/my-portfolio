// let slideIndex = 0;
// showSlides(slideIndex);

// function openModal() {
//     document.getElementById("modal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

// function nextSlide() {
//     showSlides(slideIndex += 1);
// }

// function prevSlide() {
//     showSlides(slideIndex -= 1);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");
//     if (n >= slides.length) { slideIndex = 0 }
//     if (n < 0) { slideIndex = slides.length - 1 }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";
// }

// function openModal(modalId) {
//     slideIndex = 0;
//     document.getElementById(modalId).style.display = "block";
// }

// function closeModal(modalId) {
//     slideIndex
//     document.getElementById(modalId).style.display = "none";
// }

// let currentSlide = 0;

// function showSlides(slideIndex) {
//     const slides = document.getElementsByClassName("slide");
//     if(slideIndex >= slides.length) {
//         slideIndex = 0;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % document.getElementsByClassName("slide").length;
//     showSlides(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + document.getElementsByClassName("slide").length) % document.getElementsByClassName("slide").length;
//     showSlides(currentSlide);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     showSlides(currentSlide);
// });


function openModal(modalId) {
    slideIndex = 0;
    document.getElementById(modalId).style.display = "block";
    updateModal(modalId, slideIndex); // モーダルを開いたときにスライドを更新
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

let slideIndex = 0;

function updateModal(modalId, slideIndex) {
    const modal = document.getElementById(modalId);
    const slides = modal.getElementsByClassName("slide");

    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide(modalId) {
    slideIndex = (slideIndex + 1) % document.getElementById(modalId).getElementsByClassName("slide").length;
    updateModal(modalId, slideIndex);
}

function prevSlide(modalId) {
    slideIndex = (slideIndex - 1 + document.getElementById(modalId).getElementsByClassName("slide").length) % document.getElementById(modalId).getElementsByClassName("slide").length;
    updateModal(modalId, slideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    // 各モーダルに対して初期スライドを設定
    document.querySelectorAll('.modal').forEach(modal => {
        updateModal(modal.id, slideIndex);

        // モーダルの外側をクリックしたときにモーダルを閉じる
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
});