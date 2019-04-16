class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true

  def after_sign_in_path(resource)
    protected_path
  end

  def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :phone, :hours])
 end
end
