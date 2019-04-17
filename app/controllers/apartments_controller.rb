class ApartmentsController < ActionController::API
  def index
    if !current_user || params[:all]
      apartments = Apartment.all
    else
      apartments = current_user.apartments
    end
    render json: apartments
  end

  def create
    apartment = current_user.apartments.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    apartment = Apartment.find(params[:id])

    if apartment
      apartment.destroy
      render json: apartment, status: success
    else
      render json: apartment.errors, status: :unprocessable_entity
    end
  end

  private

  def apartment_params
    params.require(:apartment).permit(:street_num, :street_name, :city, :postal_code, :state, :country)
  end
end