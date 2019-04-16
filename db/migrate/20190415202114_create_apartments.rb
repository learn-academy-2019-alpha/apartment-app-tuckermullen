class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :street_num
      t.string :street_name
      t.string :city
      t.string :postal_code
      t.string :state
      t.string :country
      t.integer :user_id

      t.timestamps
    end
  end
end
