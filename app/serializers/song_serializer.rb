class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :synth, :col1, :col2, :col3, :col4, :col5, :col6, :col7, :col8 
  has_one :user
end
