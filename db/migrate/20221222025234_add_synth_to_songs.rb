class AddSynthToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :synth, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
