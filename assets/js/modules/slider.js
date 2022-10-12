import $ from 'jquery';
import Splide from '@splidejs/splide';

$('.splide').each((index, element) => {
    const slider = new Splide(element, {
        type: 'loop',
        autoplay: true,
    });

    slider.mount();
});
