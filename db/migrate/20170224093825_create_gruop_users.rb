class CreateGruopUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :gruop_users do |t|

      t.timestamps
    end
  end
end
