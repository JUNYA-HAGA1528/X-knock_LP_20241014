
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

    // strong__review-titleの点を消す
    window.addEventListener('resize', function() {
        const titleElements = document.querySelectorAll('.strong__review-title'); // 複数の要素を取得
        titleElements.forEach(function(titleElement) {
            if (window.innerWidth <= 768) {
                titleElement.innerHTML = "会社の評判<br class='u-mobile'>口コミ"; // 点を削除
            } else {
                titleElement.innerHTML = "会社の評判・<br class='u-mobile'>口コミ"; // 点を元に戻す
            }
        });
    });
    
    // ページロード時にも適用したい場合
    window.addEventListener('load', function() {
        const titleElements = document.querySelectorAll('.strong__review-title');
        titleElements.forEach(function(titleElement) {
            if (window.innerWidth <= 768) {
                titleElement.innerHTML = "会社の評判<br class='u-mobile'>口コミ";
            } else {
                titleElement.innerHTML = "会社の評判・<br class='u-mobile'>口コミ";
            }
        });
    });
    
    
      // 初回ロード時にもチェック
    window.addEventListener('load', function() {
        const titleElement = document.querySelector('.strong__review-title');
        if (window.innerWidth <= 768) {
          titleElement.innerHTML = "会社の評判<br class='u-mobile'>口コミ"; // 点を削除
        }
    });
    
    //ページ内スクロール設定
    document.querySelectorAll('.fv__area-item').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのスクロール動作をキャンセル
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
    
            // スクロール位置を調整する
            const offset = 200; // 100px下に移動
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    

    document.querySelector('.header__logo a').addEventListener('click', function(event) {
        event.preventDefault(); // リンクのデフォルトの動作を防ぐ
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズスクロール
        });
    });
    
});
