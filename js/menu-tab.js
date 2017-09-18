$(document).ready(function() {
  var menu = $('.main-menu > li');
  var span = $('.main-menu span');
  var last_item = $('.sub-menu li:last-child a');


  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('sub-menu-active');
  });

  span.focusin(function() {
    $(this).siblings().addClass('sub-menu-active');
  });

  last_item.focusout(function() {
    $(this).parents(".sub-menu").removeClass('sub-menu-active');
  });

  var tab = $('.tab');

  // tab.click(function() {
  //   $(this).parent().addClass('board-active').siblings().removeClass('board-active');
  // });
  // tab.focusin(function() {
  //   $(this).parent().addClass('board-active').siblings().removeClass('board-active');
  // });
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-active').siblings().removeClass('board-active');
  });

  // 내가 짠 코드
  // var notice = $('.notice-heading');
  // var pds = $('.pds-heading')

  // 내가 짠 코드
  // notice.focusin(function() {
  //   $(this).parents('.notice').addClass('board-active')
  // });

  // notice.focusout(function() {
  //   $(this).parents('.notice').removeClass('board-active')
  // });

  // pds.focusin(function() {
  //   $(this).parents('.pds').addClass('board-active')
  // });

  // pds.focusout(function() {
  //   $(this).parents('.pds').removeClass('board-active')
  // });

});