class SongSerializer < ActiveModel::Serializer
  attributes :id, :lyrics, :music
  has_one :user
end
