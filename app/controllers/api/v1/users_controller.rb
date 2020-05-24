class Api::V1::UsersController < ApplicationController
	before_action :set_user, except: [:create, :index]
	before_action :set_page, only: [:index]

	def index
		@users = User.where(gym_id: current_user.gym.id).order(created_at: :desc)#.limit(10).offset(@page * 15)
		@users = JSON.parse(@users.to_json)
		@users.map{ |x| x["last_sign_in_at"] = formatLastActive User.find(x["id"]).last_sign_in_at }
		@users.map{ |x| x["nome"].present? ? x["nome"] : "" }
		render json: @users
	end

	def show
		if current_user.admin
			render json: User.find(params[:id])
		else
			render json: "Permission Denied", status: :unprocessable_entity
		end
	end

	def create
	    if current_user.admin
		    @user = User.new(user_params)
		    if @user.save
		      render json: @user, status: :created
		    else
		      render json: @user.errors, status: :unprocessable_entity
		    end	    	
	    else
	    	render json: "Permission Denied", status: :unprocessable_entity
	    end
	end

	def update
		if current_user.admin
			if @user.update(user_params)
			  render json: @user, status: :created
			else
			  render json: @user.errors, status: :unprocessable_entity
			end			
		else
			render json: "Permission Denied", status: :unprocessable_entity
		end
	end

	def destroy
		if current_user.admin
		    d = @user.destroy
		    render json: d, head: :no_content
		else
			render json: "Permission Denied", status: :unprocessable_entity
		end
	end

	private
		def formatLastActive date
			if date.present?
				case date.strftime("%d/%m/%Y")
				when DateTime.now.strftime("%d/%m/%Y")
					return "Hoje"
				when (DateTime.now - 1.day).strftime("%d/%m/%Y")
					return "Ontem"
				else
					return date.strftime("%d/%m")
				end
			else
				return ""
			end
		end

	    def set_user
	    	@user = User.find(params[:id])
	    end

  		def set_page
    		@page = params[:page]
  		end

	    def user_params
	      	params.require(:user).permit(:nome, :email, :password, :admin, :gym_id, :photos, :last_sign_in_at)
	    end
end
