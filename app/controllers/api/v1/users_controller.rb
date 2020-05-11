class Api::V1::UsersController < ApplicationController
	before_action :set_user, except: [:create]

	def show
		if current_user.id == @user.id || current_user.admin
			render json: @user
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
		if current_user.id == @user.id || current_user.admin
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
		if current_user.id == @user.id || current_user.admin
		    @user.destroy
		    render json: "Destroyed", head: :no_content
		else
			render json: "Permission Denied", status: :unprocessable_entity
		end
	end

	private
	    def set_user
	      @user = current_user
	    end

	    def user_params
	      params.require(:user).permit(:nome, :email, :password, :admin, :gym_id, :photos)
	    end
end
