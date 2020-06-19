class Api::V1::UsersController < ApplicationController
	before_action :set_user, except: [:create, :index]
	before_action :set_page, only: [:index]

	def index
		@users = User.paginate(params[:page],params[:gym_id])
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
		if @user.update(user_params)
		  render json: @user, status: :created
		else
		  render json: @user.errors, status: :unprocessable_entity
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
