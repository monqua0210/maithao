document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const correctPassword = '021022'; 
    const content = document.getElementById('content');

    if (passwordInput.value === correctPassword) {
        content.style.display = 'flex'; // Hiển thị nội dung
        document.querySelector('.password-section').style.display = 'none'; 
        document.getElementById('background-music').play(); // Bắt đầu phát nhạc
        startImageSlideshow(); // Bắt đầu slideshow hình ảnh
    } else {
        alert('Mật khẩu không chính xác, vui lòng thử lại!');
    }
});

function startImageSlideshow() {
    const leftImages = document.querySelectorAll('.left .image-slide');
    const rightImages = document.querySelectorAll('.right .image-slide');
    
    let leftIndex = 0;
    let rightIndex = 0;

    function showLeftImage() {
        leftImages[leftIndex].classList.remove('active');
        leftIndex = (leftIndex + 1) % leftImages.length; // Chuyển đến hình ảnh tiếp theo
        leftImages[leftIndex].classList.add('active');
    }

    function showRightImage() {
        rightImages[rightIndex].classList.remove('active');
        rightIndex = (rightIndex + 1) % rightImages.length; // Chuyển đến hình ảnh tiếp theo
        rightImages[rightIndex].classList.add('active');
    }

    setInterval(showLeftImage, 3000); // Thay đổi hình ảnh bên trái mỗi 3 giây
    setInterval(showRightImage, 4000); // Thay đổi hình ảnh bên phải mỗi 4 giây
}
