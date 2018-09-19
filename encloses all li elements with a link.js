 jQuery('#subcategories li').click(function() {
    console.log('click')
    jQuery('#subcategories li a').load(jQuery(this).attr('href'));
  })
