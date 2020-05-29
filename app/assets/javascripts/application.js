//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery/dist/jquery
//= require bootstrap/dist/js/bootstrap
//= require request
//= require inputmask
//= require helpers
//= require Chart.min
//= require Chart.bundle.min
//= require components/Gym
//= require components/User
//= require components/Plano
//= require_tree .

// API url for whole js files
const apiBaseUrl = "http://localhost:3000/api/v1"
// Initialize Helper
let helper = new Helper()
// Disable automatic style injection
Chart.platform.disableCSSInjection = true;

jQuery.fn.numericOnly = function() {
    return this.each(function(){
        $(this).keydown(function(e){
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};