//this query is to fetch the element
        const swiperEl = document.querySelector('swiper-container');
        const buttonNext = document.querySelector('.control_prev');
        const buttonPrev = document.querySelector('.control_next');
        const byNumber = document.querySelector('.slider-count');
        // addEventListener next button
        buttonNext.addEventListener('click', () => {
        swiperEl.swiper.slideNext();
        })
        // addEventListener previous button
        buttonPrev.addEventListener('click', () => {
        swiperEl.swiper.slidePrev();
        });
        // end script

        swiperEl.addEventListener('progress', (event) => {
            const [swiper, progress] = event.detail;
        });
        swiperEl.addEventListener('slidechange', (event) => {
            byNumber.innerHTML = '0'+(swiperEl.swiper.activeIndex+1);
        }); 