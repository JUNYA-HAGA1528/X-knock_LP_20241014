
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ヘッダーの大きさが変わる
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var header = $('.header');

        if (scrollTop > 100) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });

    $('.header__logoLink').on('click', function(event) {
        event.preventDefault(); // リンクのデフォルト動作を無効化
        $('html, body').animate({ scrollTop: 0 }, 1000); // スムーズにトップへスクロール（500ms）
    });


    //ヘッダーをスクロールで表示
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY; // 現在のスクロール位置を取得

        if (scrollPosition > 500) {
            // 800px以上スクロールしたらヘッダーを表示
            header.classList.add('visible');
        } else {
            // 800px未満の時はヘッダーを非表示
            header.classList.remove('visible');
        }
    });
});
