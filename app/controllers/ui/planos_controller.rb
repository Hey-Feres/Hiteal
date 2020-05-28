class Ui::PlanosController < ApplicationController
	def index
		@gym = current_user.gym
		@planos = @gym.planos
		@sidebar_items = {
			img:"",
			title: "Planos",
			list_items: [
				{ title: "Todos os Planos", id: "todos-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Adesão", id: "adesao-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Adicionar Plano", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
		@chartData = @planos.map{ |plano| { 
			plano.nome => {
					nome: plano.nome,
					valor: plano.valor, 
					assinaturas: plano.alunos.count,
					assinaturas_por_sexo: format_sexo_data(plano.alunos),
					assinaturas_por_idade: format_age_data(plano.alunos)
				}
			}
		}
	end
	def format_sexo_data data
		return data.map{ |p| p.sexo }.inject(Hash.new(0)) { |total, e| total[e] += 1 ;total}
	end
	def format_age_data data
		now = Date.today
		group = Hash.new(0)
		data = data.map{ |p| now.year - p.nascimento.year - ((now.month > p.nascimento.month || (now.month == p.nascimento.month && now.day >= p.nascimento.day)) ? 0 : 1) }
		.inject(Hash.new(0)) { |total, e| total[e] += 1 ; total}.sort
		data.map{|age, count|
			case
		      when age <= 16 
		      	group['under 16'] += count
		      when age <= 25 
		      	group['17-25'] += count
		      when age <= 40 
		      	group['26-40'] += count
		      when age <= 50 
		      	group['41-50'] += count
		      when age <= 60 
		      	group['51-60'] += count
		      else 
		      	group['61+'] += count 
		    end
		}
		return group	
	end
end
