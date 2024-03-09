# frozen_string_literal: false

# events
class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :Titulo
      t.text :Descripcion
      t.datetime :Fecha
      t.text :Ubicacion
      t.float :Costo

      t.timestamps
    end
  end
end
