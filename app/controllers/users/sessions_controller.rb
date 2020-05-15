class Users::SessionsController < Devise::SessionsController
  prepend_before_filter :require_no_authentication, :only => [:create ]
  include Devise::Controllers::InternalHelpers
  
  before_filter :ensure_params_exist
  clear_respond_to
  respond_to :json
  puts "{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}"
  def create
    build_resource
    puts "------> #{params[:user_login]} <------"
    resource = User.find_for_database_authentication(:login=>params[:user_login][:login])
    puts "************************"
    puts resource
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:user_login][:password])
      sign_in("user", resource)
      render :json=> {:success=>true, :auth_token=>resource.authentication_token, :login=>resource.login, :email=>resource.email}
      return
    end
    invalid_login_attempt
  end
  
  def destroy
    puts "/////////////////////"
    sign_out(resource_name)
  end

  protected
  def ensure_params_exist
    puts "[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]"
    return unless params[:user_login].blank?
    render :json=>{:success=>false, :message=>"missing user_login parameter"}, :status=>422
  end

  def invalid_login_attempt
    puts "||||||||||||||||||||||||||||||||||||"
    warden.custom_failure!
    render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  end
end
