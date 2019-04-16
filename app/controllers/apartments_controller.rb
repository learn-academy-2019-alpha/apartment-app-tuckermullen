class ApartmentsController < ApplicationController
  def index
    if !current_user || params[:all]
      apartments = Apartment.all
    else
      apartments = current_user.apartments
    end
    render json: apartments
  end
end