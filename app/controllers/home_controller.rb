class HomeController < ApplicationController
  def index
  	home_sidebar
  end

  private
  	def home_sidebar
  		@home_sidebar = [
  			{path: ui_gyms_path, img: "https://img.icons8.com/ios/25/555555/barbell.png", titulo: "Gym"},
  			{path: ui_users_path, img: "https://img.icons8.com/ios-filled/25/555555/conference-background-selected.png", titulo: "Users"},
  			{path: ui_planos_path, img: "https://img.icons8.com/ios/25/555555/square.png", titulo: "Planos"},
  			{path: ui_alunos_path, img: "https://img.icons8.com/ios/25/555555/pullups.png", titulo: "Alunos"},
  			{path: ui_avisos_path, img: "https://img.icons8.com/ios/25/555555/sheet-of-paper.png", titulo: "Avisos"},
  			{path: ui_funcionarios_path, img: "https://img.icons8.com/ios/25/555555/conference.png", titulo: "Funcionários"},
  			{path: ui_aulas_path, img: "https://img.icons8.com/ios/25/555555/yoga.png", titulo: "Aulas"},
  			{path: "#", img: "https://img.icons8.com/ios/25/555555/settings.png", titulo: "Prefêrencias"},
  		]
  	end
end