class AddColsToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :col1, :string
    add_column :songs, :col2, :string
    add_column :songs, :col3, :string
    add_column :songs, :col4, :string
    add_column :songs, :col5, :string
    add_column :songs, :col6, :string
    add_column :songs, :col7, :string
    add_column :songs, :col8, :string
  end
end
