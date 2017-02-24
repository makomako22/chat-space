class CreateGruops < ActiveRecord::Migration[5.0]
  def change
    create_table :gruops do |t|

      t.timestamps
    end
  end
end
