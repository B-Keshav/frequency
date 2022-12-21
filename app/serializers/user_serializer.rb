class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :email, :profile_pic
  has_many :songs
end
