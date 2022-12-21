class AddTittleToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :title, :string
  end
end
