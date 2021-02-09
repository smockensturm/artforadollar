function initMain() {


      // init Masonry
    var $grid  = $('.shop-grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.shop-item, .shop-item-99days',
        // use element for option
        columnWidth: '.col-sizer, .col-sizer-99days',
        percentPosition: true
    })

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false,
        'disableScrolling': true
    })

        
}
