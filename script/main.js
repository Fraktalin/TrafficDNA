$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: "linear",
  });
});

$(document).ready(function () {
  enableSelectBoxes();
});
function enableSelectBoxes() {
  $("div.selectBox").each(function () {
    $(this)
      .children("span.selected")
      .html(
        $(this)
          .children("div.selectOptions")
          .children("span.selectOption:first")
          .html()
      );
    $(this).attr(
      "value",
      $(this)
        .children("div.selectOptions")
        .children("span.selectOption:first")
        .attr("value")
    );

    $(this)
      .children("span.selected,span.selectArrow")
      .click(function () {
        if (
          $(this).parent().children("div.selectOptions").css("display") ==
          "none"
        ) {
          $(this)
            .parent()
            .children("div.selectOptions")
            .css("display", "block");
        } else {
          $(this).parent().children("div.selectOptions").css("display", "none");
        }
      });

    $(this)
      .find("span.selectOption")
      .click(function () {
        $(this).parent().css("display", "none");
        $(this).closest("div.selectBox").attr("value", $(this).attr("value"));
        $(this).parent().siblings("span.selected").html($(this).html());
      });
  });
}

const sexItems = document.querySelectorAll(".swap-sex");
const sexItemsPartner = document.querySelectorAll(".swap-sex-partner");

for (const i of sexItems) {
  i.addEventListener("click", swapSex);
}

for (const i of sexItemsPartner) {
  i.addEventListener("click", swapSexPartner);
}

function swapSex() {
  for (const i of sexItems) {
    [i.firstElementChild.src, i.firstElementChild.dataset.swap] = [
      i.firstElementChild.dataset.swap,
      i.firstElementChild.src,
    ];
    i.classList.toggle("active");
  }
}

function swapSexPartner() {
  for (const i of sexItemsPartner) {
    [i.firstElementChild.src, i.firstElementChild.dataset.swap] = [
      i.firstElementChild.dataset.swap,
      i.firstElementChild.src,
    ];
    i.classList.toggle("active");
  }
}

// multiple handled with value
var pmdSliderValueRange = document.getElementById("pmd-slider-value-range");

noUiSlider.create(pmdSliderValueRange, {
  start: [20, 80], // Handle start position
  connect: true, // Display a colored bar between the handles
  tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
  format: wNumb({
    decimals: 0,
    thousand: "",
    postfix: "",
  }),
  range: {
    // Slider can select '0' to '100'
    min: 0,
    max: 100,
  },
  step: 0,
  pips: {
    mode: "steps",
    density: 10,
  },
});
