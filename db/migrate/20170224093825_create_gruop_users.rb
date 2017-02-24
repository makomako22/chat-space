class CreateGruopUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :gruop_users do |t|
      t.integer  :user_id, foreign_key: true
      t.integer  :gruop_id, foreign_key: true
      t.timestamps
    end
  end
end
