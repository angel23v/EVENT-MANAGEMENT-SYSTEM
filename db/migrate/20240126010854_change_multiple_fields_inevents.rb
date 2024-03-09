class ChangeMultipleFieldsInevents < ActiveRecord::Migration[7.1]
  def change
    rename_column :events, :Titulo, :titulo
    rename_column :events, :Descripcion, :descripcion
    rename_column :events, :Fecha, :fecha
    rename_column :events, :Ubicacion, :ubicacion
    rename_column :events, :Costo, :costo
    # Agrega más líneas según sea necesario para otros cambios
  end
end
