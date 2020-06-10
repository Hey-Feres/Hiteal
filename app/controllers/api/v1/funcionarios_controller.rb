class Api::V1::FuncionariosController < ApplicationController
	before_action :set_funcionario, except: [:create, :index, :search]

	def index
		@funcionarios = Funcionario.paginate(params[:page],params[:gym_id])
		render json: @funcionarios
	end

	def show
		render json: @funcionario
	end

	def create
	    @funcionario = Funcionario.new(funcionario_params)
	    @funcionario.nascimento = @funcionario.nascimento.to_datetime
	    if @funcionario.save
	      render json: @funcionario, status: :created
	    else
	      render json: @funcionario.errors, status: :unprocessable_entity
	    end
	end

	def update
		if params[:funcionario][:nascimento].present?
			params[:funcionario][:nascimento] = params[:funcionario][:nascimento].to_datetime
		end
		if @funcionario.update(funcionario_params)
		  render json: @funcionario, status: :created
		else
		  render json: @funcionario.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @funcionario.destroy
	    render json: @funcionario, head: :no_content
	end
	
	def search
		@funcionarios = Funcionario.search(params[:funcionario][:search],params[:funcionario][:page],params[:funcionario][:gym_id])
		render json: @funcionarios
	end

	private
	    def set_funcionario
	      @funcionario = Funcionario.find(params[:id]) 
	    end

	    def funcionario_params
	      params.require(:funcionario).permit(:gym_id, :nome, :email, :sexo, :cpf, :nascimento, :remuneracao, :funcao, :search, :page)
	    end
end
