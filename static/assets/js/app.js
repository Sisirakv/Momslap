var PIXELSIGNS = PIXELSIGNS || {};
!(function (d) {
  "use strict";
  (PIXELSIGNS.initialize = {
    init: function () {
      PIXELSIGNS.initialize.general(),
        PIXELSIGNS.initialize.tab(),
        PIXELSIGNS.initialize.sectionBackground(),
        PIXELSIGNS.initialize.sectionSwitch(),
        PIXELSIGNS.initialize.portfolio(),
        PIXELSIGNS.initialize.countUp(),
        PIXELSIGNS.initialize.swiperSlider(),
        PIXELSIGNS.initialize.googleMap();
    },
    general: function () {
      d(".saaspik-dropdown li").on("click", function (t) {
        var i = d(t.target),
          a = i.closest(".saaspik-dropdown"),
          e = a.find("label"),
          s = e.find("span"),
          n = a.find("input");
        (a.hasClass("init") || (n.is(":checked") && !i.hasClass("selected"))) &&
          (a.removeClass("init"),
          a.find("li.selected").removeClass("selected"),
          i.addClass("selected"),
          a.attr(
            "data-val",
            i.attr("data-val") || "" == i.attr("data-val")
              ? i.attr("data-val")
              : i.text().trim()
          ),
          s.text(i.attr("data-text") ? i.attr("data-text") : i.text().trim()),
          e.css("width", s.width() + 20 + "px"),
          n.prop("checked", !1));
      }),
        d(".saaspik-select")
          .on("click", ".placeholder", function () {
            var t = d(this).closest(".saaspik-select");
            t.hasClass("is-open")
              ? t.removeClass("is-open")
              : (t.addClass("is-open"),
                d(".saaspik-select.is-open").not(t).removeClass("is-open"));
          })
          .on("click", "ul>li", function () {
            d(this)
              .closest(".saaspik-select")
              .removeClass("is-open")
              .find(".placeholder")
              .text(d(this).text());
          }),
        d(".lng-dropdown.init li:first-child").click(),
        new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !1,
          live: !0,
          scrollContainer: null,
        }).init(),
        d(".faq .card").each(function () {
          var a = d(this);
          a.on("click", function (t) {
            var i = a.hasClass("active");
            d(".faq .card").removeClass("active"),
              i ? a.removeClass("active") : a.addClass("active");
          });
        }),
        d(".popup-video").each(function () {
          d(".popup-video").magnificPopup({ type: "iframe" });
        }),
        d(".pricing-tab-switcher, .tab-btn").on("click", function () {
          d(".pricing-tab-switcher, .tab-btn").toggleClass("active"),
            d(".pricing-tab").toggleClass("seleceted"),
            d(".pricing-amount").toggleClass("change-subs-duration");
        }),
        d(".tabs-box").length &&
          d(".tabs-box .pricing-tab  .tab-btn").on("click", function (t) {
            t.preventDefault();
            var i = d(d(this).attr("data-tab"));
            if (d(i).is(":visible")) return !1;
            i
              .parents(".tabs-box")
              .find(".pricing-tab ")
              .find(".tab-btn")
              .removeClass("active-btn"),
              d(this).addClass("active-btn"),
              i
                .parents(".tabs-box")
                .find(".tabs-content")
                .find(".tab")
                .fadeOut(0),
              i
                .parents(".tabs-box")
                .find(".tabs-content")
                .find(".tab")
                .removeClass("active-tab animated fadeIn"),
              d(i).fadeIn(300),
              d(i).addClass("active-tab animated fadeIn");
          }),
        d("#pix-tabs-nav li:nth-child(2)").addClass("active"),
        d("#pix-tabs-content .content").hide(),
        d("#pix-tabs-content .content:nth-child(2)").show(),
        d("#pix-tabs-nav li").on("click", function () {
          d("#pix-tabs-nav li").removeClass("active"),
            d(this).addClass("active"),
            d("#pix-tabs-content .content").hide();
          var t = d(this).find("a").attr("href");
          return d(t).fadeIn(400), !1;
        }),
        d(".site-main-menu li a").each(function () {
          d(this).attr("href") == location.href.split("/").slice(-1) &&
            d(this).addClass("current_page");
        });
    },
    swiperSlider: function () {
      d(".swiper-container").each(function () {
        var t = d(this),
          i = (d(this).attr("id"), d(this).data("perpage") || 1),
          a = d(this).data("loop") || !0,
          e = d(this).data("speed") || 700,
          s = d(this).data("autoplay") || 5e3,
          n = d(this).data("slidegroup") || 1,
          o = d(this).data("space") || 0,
          l = d(this).data("effect"),
          c = d(this).data("direction") || "horizontal",
          r = d(this).data("breakpoints");
        new Swiper(t, {
          slidesPerView: i,
          spaceBetween: o,
          slidesPerGroup: n,
          loop: a,
          speed: e,
          effect: l,
          direction: c,
          breakpoints: r,
          watchSlidesVisibility: !0,
          slideVisibleClass: "swiper-slide-visible",
          autoplay: { delay: s, disableOnInteraction: !1 },
          pagination: { el: ".swiper-pagination", clickable: !0 },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
    portfolio: function () {
      if (void 0 !== d.fn.imagesLoaded && void 0 !== d.fn.isotope) {
        d(".pixsass-portfolio-items").imagesLoaded(function () {
          var i = d(".pixsass-portfolio-items");
          i.isotope({
            itemSelector: ".pixsass-portfolio-item",
            percentPosition: !0,
            transitionDuration: "0.5s",
            masonry: { columnWidth: ".grid-sizer", layoutMode: "masonry" },
          }),
            d(".pixsass-isotope-filter a").on("click", function () {
              d(".pixsass-isotope-filter")
                .find(".current")
                .removeClass("current"),
                d(this).parent().addClass("current");
              var t = d(this).attr("data-filter");
              return i.isotope({ filter: t }), !1;
            }),
            d(window).resize(function () {
              i.isotope(), t.masonry();
            });
        });
        var t = d(".blog-items");
        t.masonry({ itemSelector: ".blog-item", percentPosition: !0 });
      }
    },
    mobileMenu: function () {
      d(window).width() < 991 &&
        (d(".site-main-menu li.active").addClass("open").children("ul").show(),
        d(".site-main-menu li.menu-item-has-children>a").on(
          "click",
          function () {
            d(this).removeAttr("href");
            var t = d(this).parent("li");
            t.hasClass("open")
              ? (t.removeClass("open"),
                t.find("li").removeClass("open"),
                t.find("ul").slideUp(400))
              : (t.addClass("open"),
                t.children("ul").slideDown(400),
                t.siblings("li").children("ul").slideUp(400),
                t.siblings("li").removeClass("open"),
                t.siblings("li").find("li").removeClass("open"),
                t.siblings("li").find("ul").slideUp(400));
          }
        )),
        d(".toggle-menu").on("click", function (t) {
          t.preventDefault();
          d("body").toggleClass("open-menu"),
            d('<div class="mask-overlay">')
              .hide()
              .appendTo("body")
              .fadeIn("fast"),
            d(".mask-overlay, .close-menu").on("click", function () {
              d("body").removeClass("open-menu"), d(".mask-overlay").remove();
            });
        });
    },
    sectionBackground: function () {
      d("[data-bg-image]").each(function () {
        var t = d(this).data("bg-image");
        d(this).css({ backgroundImage: "url(" + t + ")" });
      });
    },
    progressBar: function () {
      d(".skill-wrapper").length &&
        d(".skills")
          .not(".active")
          .each(function () {
            d(window).scrollTop() >=
              d(this).offset().top - 1 * d(window).height() &&
              (d(this).addClass("active"),
              d(this)
                .find(".skill")
                .each(function () {
                  var t = d(this).attr("data-value");
                  d(this)
                    .find(".active-line")
                    .css("width", t + "%");
                }));
          });
    },
    sectionSwitch: function () {
      d('[data-type="section-switch"], #menu-home li a, .scroll-btn').on(
        "click",
        function () {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var t = d(this.hash);
            if (0 < t.length)
              return (
                (t = t.length ? t : d("[name=" + this.hash.slice(1) + "]")),
                d("html,body").animate({ scrollTop: t.offset().top }, 1e3),
                !1
              );
          }
        }
      );
    },
    tab: function () {
      d(".tab-nav-item > .acc-btn").on("click", function () {
        d(this).hasClass("active")
          ? (d(this).removeClass("active"),
            d(this).siblings(".content").slideUp(400),
            d(".tab-nav-item > .acc-btn i")
              .removeClass("fa-minus")
              .addClass("fa-plus"))
          : (d(".tab-nav-item > .acc-btn i")
              .removeClass("fa-minus")
              .addClass("fa-plus"),
            d(this).find("i").removeClass("fa-plus").addClass("fa-minus"),
            d(".tab-nav-item > .acc-btn").removeClass("active"),
            d(this).addClass("active"),
            d(".content").slideUp(400),
            d(this).siblings(".content").slideDown(400));
      });
      var n = d(".gp-tabs-navigation li"),
        o = d(".gp-tabs-content");
      function t(t) {
        var i = parseInt(t.children(".gp-tabs-navigation").width()),
          a = parseInt(t.width());
        t.scrollLeft() >= i - a
          ? t.parent(".gp-tabs").addClass("is-ended")
          : t.parent(".gp-tabs").removeClass("is-ended");
      }
      n.on("click", function (t) {
        t.preventDefault();
        var i = d(this);
        if (!i.hasClass("active-tab")) {
          var a = i.data("content"),
            e = o.find('.pix-tab-item[data-content="' + a + '"]'),
            s = e.innerHeight();
          n.removeClass("active-tab"),
            i.addClass("active-tab"),
            e
              .addClass("active-tab")
              .siblings(".pix-tab-item")
              .removeClass("active-tab"),
            o.animate({ height: s }, 500);
        }
      }),
        t(d(".gp-tabs nav")),
        d(window).on("resize", function () {
          t(d(".gp-tabs nav")), o.css("height", "auto");
        }),
        d(".gp-tabs nav").on("scroll", function () {
          t(d(this));
        });
    },
    countUp: function () {
      var a = {
          useEasing: !0,
          useGrouping: !0,
          separator: ",",
          decimal: ".",
          prefix: "",
          suffix: "",
        },
        t = d("[data-counter]");
      t &&
        t.each(function () {
          var t = d(this).data("counter"),
            i = new CountUp(this, 0, t, 0, 2.5, a);
          d(this).appear(
            function () {
              i.start();
            },
            { accX: 0, accY: 0 }
          );
        });
    },
    googleMap: function () {
      d(".gmap3-area").each(function () {
        var t = d(this),
          i = (t.data("key"), t.data("lat")),
          a = t.data("lng"),
          e = t.data("mrkr");
        t.gmap3({
          center: [i, a],
          zoom: 8,
          scrollwheel: !1,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              featureType: "administrative.country",
              elementType: "geometry.fill",
              stylers: [{ visibility: "on" }],
            },
          ],
        }).marker(function (t) {
          return { position: t.getCenter(), icon: e };
        });
      });
    },
  }),
    (PIXELSIGNS.documentOnReady = {
      init: function () {
        PIXELSIGNS.initialize.init();
      },
    }),
    (PIXELSIGNS.documentOnLoad = {
      init: function () {
        d(".page-loader").fadeOut("slow");
      },
    }),
    (PIXELSIGNS.documentOnResize = { init: function () {} }),
    (PIXELSIGNS.documentOnScroll = {
      init: function () {
        PIXELSIGNS.initialize.sectionBackground(),
          PIXELSIGNS.initialize.progressBar(),
          300 < d(window).scrollTop()
            ? d(".return-to-top").addClass("back-top")
            : d(".return-to-top").removeClass("back-top");
      },
    }),
    d(document).ready(PIXELSIGNS.documentOnReady.init),
    d(window).on("load", PIXELSIGNS.documentOnLoad.init),
    d(window).on("resize", PIXELSIGNS.documentOnResize.init),
    d(window).on("scroll", PIXELSIGNS.documentOnScroll.init);
})(jQuery);
