class AddUserToEventTable < ActiveRecord::Migration[7.1]
  def change
    add_reference :events, :user, foreign_key: true
    add_column :events, :privado, :boolean
    add_column :events, :latitud, :float
    add_column :events, :longitud, :float
  end
end
