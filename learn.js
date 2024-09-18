rgb = ["#08D9D6", "#FF2E63", "#AD8B73", "#F9ED69", "#0F4C75", "#B1B2FF", "#AAC4FF", "#B4846C", "#3FC1C9"]

function changeRGB() {
    var randomNumber = Math.floor(Math.random() * rgb.length)
    var color = rgb[randomNumber];
    $("body").css("background-color", color);
    $(".container-1 p").text(color); 
};

$("button").click(function() {
    changeRGB();
})
