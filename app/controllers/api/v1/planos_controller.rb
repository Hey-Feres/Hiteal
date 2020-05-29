class Api::V1::PlanosController < ApplicationController
	before_action :set_plano, except: [:create, :chart_data, :format_sexo_data, :format_age_data]
	
	def show
		render json: @plano
	end

	def create
	    @plano = Plano.new(plano_params)
	    if @plano.save
	      render json: @plano, status: :created
	    else
	      render json: @plano.errors, status: :unprocessable_entity
	      puts @plano.errors.inspect
	    end	
	end

	def update
		if @plano.update(plano_params)
		  render json: @plano, status: :created
		else
		  render json: @plano.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @plano.destroy
	    render json: @plano, head: :no_content
	end

	def chart_data
		@planos = current_user.gym.planos
		@chartData = @planos.map{ |plano| { 
				nome: plano.nome,
				valor: plano.valor, 
				assinaturas: plano.alunos.count,
				assinaturas_por_sexo: format_sexo_data(plano.alunos),
				assinaturas_por_idade: format_age_data(plano.alunos),
				assinaturas_porcentagem: (plano.alunos.count.to_f * 100) / (@planos.map{|i| i.alunos.count.to_f}.sum.to_f)

			}
		}
		render json: @chartData
	end
	
	private
	  	def set_plano
	    	@plano = Plano.find(params[:id])
	  	end

		def plano_params
			params.require(:plano).permit(:gym_id, :nome, :valor, :periodo)
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
