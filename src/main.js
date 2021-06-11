import $ from "jquery"

$(document).ready(function () {
  var eles = $('[data-ajax-load="true"]')
  for (var i = 0; i < eles.length; i++) {
    var ele = $(eles[i])

    ;(function (ele) {
      var fname = ele.attr("data-ajax-target")
      $.get(fname, function (res) {
        ele.html(res)
        var links = window.location.pathname.split("/")
        var link = links.pop()
        $(".nav-link").removeClass("active-now")
        $("[href='" + window.location.pathname + "']").addClass("active-now")
        $("[href='" + link + "']").addClass("active-now")
      })
    })(ele)
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn()
    } else {
      $("#back-to-top").fadeOut()
    }
  })
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    )
    return false
  })
})
