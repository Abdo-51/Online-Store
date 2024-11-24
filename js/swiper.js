
    var swiper = new Swiper(".slide-swp", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true
        },
        autoplay:{
            delay: 3000,
        },loop: true
    });
  
    // swiper slide products
  var swiper = new Swiper(".slide_product", {
    slidesPerView:5,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    autoplay:{
        delay: 3000,
    },loop: true
  });
  



  function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example usage:
const fl = createHelloWorld();
console.log(fl()); // Output: "Hello World"

/////////////////////////////////////
function createHello() {
  return function() {
      return "Hello World2";
  };
}

// Example usage:
const f = createHello();
console.log(f()); // Output: "Hello World 2 "