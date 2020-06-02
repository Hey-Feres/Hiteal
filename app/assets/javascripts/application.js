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