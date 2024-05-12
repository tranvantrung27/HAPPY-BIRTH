

// Đợi cho đến khi tất cả nội dung trang web được tải xong
document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy phần tử nút và lottie
    var button = document.getElementById('start');
    var lottieContainer = document.getElementById('lottie');

    // Khởi tạo animation Lottie
    var anim = lottie.loadAnimation({
        container: lottieContainer, // ID của phần tử chứa Lottie
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/55c0c180-d778-4d34-954c-9038666cfb03/PQps4I3FYk.json' 
    });

    // Xử lý sự kiện click trên nút
    button.addEventListener('click', function() {
        // Chạy animation Lottie
        anim.play();

        // Khi animation hoàn thành, chuyển hướng đến trang mới
        anim.addEventListener('complete', function() {
            window.location.href = '2.html';
        });
    });
});
